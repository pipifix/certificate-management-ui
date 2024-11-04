/* import { Icons } from '@/components/icons' */
// nav.ts
import { LucideIcon } from 'lucide-react'

export interface ModuleSidebarItem {
  title: string
  title_en?: string
  icon?: LucideIcon
  url: string
}

export interface SubItem {
  title: string
  title_en?: string
  role?: string
  right?: string
  icon?: LucideIcon
  url: string
}

export interface NavItem {
  title: string
  title_en?: string
  url: string
  badge_label?: string
  icon?: LucideIcon
  isActive?: boolean
  app?: string
  items?: SubItem[]
}

export interface TopNavItem extends React.HTMLAttributes<HTMLElement> {
  title: string
  title_en?: string
  label?: string
  href: string
  icon?: LucideIcon
  isActive?: boolean
}

/* 
// old procject code 

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof LucideIcon;
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
 */
