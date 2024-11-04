// this data is for the navigation links in the app-header component
import { TopNavItem } from '@/types/nav'
import { LayoutDashboard, Import } from 'lucide-react'

export const topNavLinks: {
  links: TopNavItem[]
} = {
  links: [
    {
      title: 'Overview',
      href: '/',
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: 'Import Zertifikate',
      href: '/import-certificates',
      icon: Import,
      isActive: false,
    },
    {
      title: 'Import Private Schlüssel',
      href: '/import-private-keys',
      icon: Import,
      isActive: false,
    },
    {
      title: 'Mandanten',
      href: '/tenants',
      isActive: false,
    },
  ],
}
