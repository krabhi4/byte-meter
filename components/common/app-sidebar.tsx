import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import type { ComponentProps } from 'react';

const data = [
  {
    title: 'Home',
    url: '/',
    disabled: false,
  },
  {
    title: 'About',
    url: '/about',
    disabled: false,
  },
  //   {
  //     title: 'Contact',
  //     url: '/contact',
  //     disabled: true,
  //   },
  {
    title: 'Privacy Policy',
    url: '/privacy-policy',
    disabled: false,
  },
];

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="my-10 flex items-center justify-center text-4xl font-bold">
          <svg
            width="200"
            height="60"
            viewBox="0 0 200 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="20" fill="#007acc" />
            <path d="M30 10 A20 20 0 0 1 50 30 L30 30 Z" fill="#005f99" />

            <text
              x="60"
              y="35"
              font-family="Arial, sans-serif"
              font-size="24"
              className="dark:fill-white fill-black"
              font-weight="bold"
            >
              Byte Meter
            </text>
          </svg>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.map((item) => (
          <SidebarMenuButton asChild key={item.title} isActive={item.disabled}>
            <Link href={item.url} className="flex items-center justify-center">
              {item.title}
            </Link>
          </SidebarMenuButton>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
