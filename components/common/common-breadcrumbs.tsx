'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useBreadcrumbStore } from '@/store';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const CommonBreadcrumbs = () => {
  const path = usePathname();
  const { breadcrumbs, setBreadcrumbs } = useBreadcrumbStore();

  useEffect(() => {
    if (path === '/') {
      setBreadcrumbs([{ title: 'Home', url: '/' }]);
    }
    if (path === '/about') {
      setBreadcrumbs([
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
      ]);
    }
    if (path === '/contact') {
      setBreadcrumbs([
        { title: 'Home', url: '/' },
        { title: 'Contact', url: '/contact' },
      ]);
    }
    if (path === '/privacy-policy') {
      setBreadcrumbs([
        { title: 'Home', url: '/' },
        { title: 'Privacy Policy', url: '/privacy-policy' },
      ]);
    }
  }, [setBreadcrumbs, path]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbItem key={item.title}>
            <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
            {idx < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CommonBreadcrumbs;
