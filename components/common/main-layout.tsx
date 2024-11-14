import type { ReactNode } from 'react';
import { AppSidebar } from '@/components/common/app-sidebar';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ModeToggle } from './mode-toggle';
import CommonBreadcrumbs from './common-breadcrumbs';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center border-b justify-between px-4">
          <div className="flex h-16 shrink-0 items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <CommonBreadcrumbs />
          </div>
          <ModeToggle />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
