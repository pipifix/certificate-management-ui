// this is a lists the user profile links in a separate sidebar group
// it shows the current active page if the user navigates to his own profile but the useCheckActiveNav hook has to be improved
// if the user is on profile/display the active state on the sidebar is missing

import useCheckActiveNav from '@/hooks/use-check-active-nav'
import { NavItem } from '@/types/nav' // Importiere die Typen

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { LayoutDashboard } from 'lucide-react'

interface NavHelpProps {
  items: NavItem[]
}

export function NavHelpLinks({ items }: NavHelpProps) {
  const { checkActiveNav } = useCheckActiveNav()

  return (
    <SidebarGroup /* className='group-data-[collapsible=icon]:hidden' */>

      <SidebarGroupLabel>Hilfe</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={'help'+item.title}>
            <SidebarMenuButton
              asChild
              isActive={checkActiveNav(item.url)}
              tooltip={item.title}
              className='hover:text-primary data-[active=true]:border data-[active=true]:border-primary/20 data-[active=true]:bg-blue-50 data-[active=true]:text-primary'
            >
              <a href={item.url}>
                {item.icon && <item.icon className='opacity-50' />}
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
            {item.badge_label && (
              <SidebarMenuBadge className='rounded-full border bg-secondary p-2'>
                {item.badge_label}
              </SidebarMenuBadge>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
