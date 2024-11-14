import { create } from 'zustand';

interface Breadcrumb {
  url: string;
  title: string;
}

interface BreadcrumbStore {
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
}

export const useBreadcrumbStore = create<BreadcrumbStore>((set) => ({
  breadcrumbs: [],
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
}));
