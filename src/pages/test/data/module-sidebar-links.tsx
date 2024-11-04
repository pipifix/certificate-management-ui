// this data is for the navigation links in the app-header component
import { ModuleSidebarItem } from '@/types/nav'
import {
  Contact,
  Network,
  Users,
  ShieldCheck,
  Globe,
  Factory,
} from 'lucide-react'

export const organizationSidebarNavItems: {
  items: ModuleSidebarItem[]
} = {
  items: [
    {
      title: 'Übersicht',
      title_en: 'Overview',
      icon: Factory,
      url: '/organization',
    },
    {
      title: 'Mitarbeiter',
      title_en: 'Employees',
      icon: Users,
      url: '/organization/employees',
    },
    {
      title: 'Gäste',
      title_en: 'Guests',
      icon: Contact,
      url: '/organization/guests',
    },
    {
      title: 'Abteilungen/Gruppen',
      title_en: 'Departments',
      icon: Network,
      url: '/organization/departments',
    },
    {
      title: 'Zertifikate',
      title_en: 'Certificates',
      icon: ShieldCheck,
      url: '/organization/certificates',
    },
    {
      title: 'Domains',
      title_en: 'Domains',
      icon: Globe,
      url: '/organization/domains',
    },
  ],
}
