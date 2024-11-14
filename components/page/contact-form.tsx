'use client';

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
import { Textarea } from '../ui/textarea';
import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { sendDataToSheet } from '@/hooks/sendDataToSheet';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().max(50),
  email: z.string().email(),
  message: z.string().max(500),
});

const ContactForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const res = await sendDataToSheet(values);
    // @ts-expect-error - We know that res.title exists
    if (res.title) {
      // @ts-expect-error - We know that res.title exists
      if (res.title === 'Success') {
        toast({
          title: 'Message sent',
          description: 'Thank you for your message!',
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: 'An error occurred while sending the message.',
          variant: 'destructive',
        });
      }
    }
  }

  useEffect(() => {
    void router.push('/');
  }, [router]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[600px] md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name" />
                </FormControl>
                <FormDescription>
                  Please enter your name. Max of 50 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email" />
                </FormControl>
                <FormDescription>
                  Please enter your email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>
                  Message <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Message" rows={5} />
                </FormControl>
                <FormDescription>
                  Please enter your message. Max of 500 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
