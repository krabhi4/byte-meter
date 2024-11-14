'use client';

import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  speedUnit: z
    .enum(['Kbps', 'Mbps', 'Gbps', 'KBps', 'MBps', 'GBps'])
    .default('Mbps'),
  speed: z.number().int().positive().default(1),
  timeUnit: z.enum(['s', 'm', 'h', 'd']).default('s'),
  time: z.number().int().positive().default(1),
});

const SPEED_MULTIPLIERS: Record<string, number> = {
  Kbps: 1_000,
  Mbps: 1_000_000,
  Gbps: 1_000_000_000,
  KBps: 8_000,
  MBps: 8_000_000,
  GBps: 8_000_000_000,
};

const TIME_MULTIPLIERS: Record<string, number> = {
  s: 1,
  m: 60,
  h: 3_600,
  d: 86_400,
};

function formatDataUsage(bytes: number): string {
  if (bytes >= 1e9) return (bytes / 1e9).toFixed(2) + ' GB';
  if (bytes >= 1e6) return (bytes / 1e6).toFixed(2) + ' MB';
  if (bytes >= 1e3) return (bytes / 1e3).toFixed(2) + ' KB';
  return bytes + ' B';
}

function calculateDataUsage(values: z.infer<typeof formSchema>): string {
  const speedBps = SPEED_MULTIPLIERS[values.speedUnit];
  const timeSeconds = values.time * TIME_MULTIPLIERS[values.timeUnit];
  const totalDataBits = speedBps * timeSeconds * values.speed;

  // Convert bits to bytes (1 byte = 8 bits)
  const totalDataBytes = totalDataBits / 8;

  return formatDataUsage(totalDataBytes);
}

const HomeForm = () => {
  const [dataUsage, setDataUsage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      speedUnit: 'Mbps',
      timeUnit: 's',
      time: undefined,
      speed: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const dataUsage = calculateDataUsage(values);
    setDataUsage(dataUsage);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-[600px] md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="speedUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Connection Speed</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Connection Speed" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Kbps">Kbps</SelectItem>
                        <SelectItem value="Mbps">Mbps</SelectItem>
                        <SelectItem value="Gbps">Gbps</SelectItem>
                        <SelectItem value="KBps">KBps</SelectItem>
                        <SelectItem value="MBps">MBps</SelectItem>
                        <SelectItem value="GBps">GBps</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Speed of your internet connection.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="speed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Connection Speed</FormLabel>
                  <FormControl>
                    <Input
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      onBlur={field.onBlur}
                      name={field.name}
                      disabled={field.disabled}
                      value={field.value}
                      type="number"
                      placeholder="Connection Speed"
                      min={1}
                      step={1}
                    />
                  </FormControl>
                  <FormDescription>
                    Speed of your internet connection.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Connection Time Unit</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Connection Time Unit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="s">Seconds</SelectItem>
                        <SelectItem value="m">Minutes</SelectItem>
                        <SelectItem value="h">Hours</SelectItem>
                        <SelectItem value="d">Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Time unit for which you want to calculate the data usage.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Connection Time</FormLabel>
                  <FormControl>
                    <Input
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      onBlur={field.onBlur}
                      name={field.name}
                      disabled={field.disabled}
                      value={field.value}
                      type="number"
                      placeholder="Connection Time"
                      min={1}
                      step={1}
                    />
                  </FormControl>
                  <FormDescription>
                    Time for which you want to calculate the data usage.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={
              !form.formState.isValid ||
              form.formState.isSubmitting ||
              form.getValues('time') === undefined
            }
          >
            Submit
          </Button>
        </form>
      </Form>
      {dataUsage && (
        <div className="max-w-[600px] mt-5 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl w-full">
          Your final usage is <strong>{dataUsage}</strong>
        </div>
      )}
    </>
  );
};

export default HomeForm;
