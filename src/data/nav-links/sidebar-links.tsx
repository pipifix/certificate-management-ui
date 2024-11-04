// sidebar-links.ts
import { NavItem } from '@/types/nav'
import {
  FileKey2,
  FileKey,
  FileBadge2,
  FileBadge,
  Import,
  KeyRound,
  Warehouse,
  BookText,
} from 'lucide-react'

export const sidebarLinks: {
  helplinks: NavItem[]
  links: NavItem[]
} = {
  helplinks: [
    {
      title: 'Import Zertifikate',
      url: '/import-certificates',
      icon: Import,
    },
    {
      title: 'Import Private Schlüssel',
      url: '/import-private-keys',
      icon: Import,
    },
    {
      title: 'Mandantenverwaltung',
      title_en: 'Tenant management',
      url: '/tenants',
      icon: Warehouse,
    },
    {
      title: 'Download Handbuch',
      title_en: 'Documentation',
      url: '/docs',
      icon: BookText,
    },
  ],
  links: [
    {
      title: 'Öffentliche Zertifikate',
      title_en: 'Public Certificates',
      url: '/public-certificates',
      icon: FileBadge,
    },
    {
      title: 'Eingereichte Zertifikate',
      title_en: 'Submitted Certificates',
      url: '/submitted-certificates',
      icon: Import,
    },
    {
      title: 'Aussteller Zertifikate',
      title_en: 'Exhibitor certificatess',
      url: '/exhibitor-certificates',
      icon: FileBadge2,
    },
    {
      title: 'Private Schlüssel',
      title_en: 'Private Keys',
      url: '/private-keys',
      icon: FileKey2,
    },
    {
      title: 'Private PGP Schlüssel',
      title_en: 'Private PGP Keys',
      url: '/private-pgp-keys',
      icon: FileKey,
    },
    {
      title: 'Öffentliche PGP Schlüssel',
      title_en: 'Public PGP Keys',
      url: '/public-pgp-keys',
      icon: KeyRound,
    },
  ],
}
