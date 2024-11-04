import * as React from 'react'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { sidebarLinks } from '@/data/nav-links/sidebar-links' // Importiere die Sidebar-Daten
import { NavPagesLinks } from '@/components/host-sidebarcomponents/nav-pages-links'
import { NavHelpLinks } from '@/components/host-sidebarcomponents/nav-help-links'
import { UserDropdown } from '@/components/host-sidebarcomponents/user-dropdown'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader className='border-color-slate-50 border-box h-16 place-content-center border-b p-3 text-primary transition-all group-data-[collapsible=icon]:p-2'>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className='flex items-center gap-2 text-primary'>
              <ShieldCheck className='tansition-800ms ml-2 transition-all group-data-[collapsible=icon]:ml-0' />
              <span className='text-xl group-data-[collapsible=icon]:hidden'>
                pro<span className='font-italic font-bold'>NEXT</span>
              </span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <UserDropdown />
        <NavPagesLinks items={sidebarLinks.links} />
        <NavHelpLinks items={sidebarLinks.helplinks} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className='text-xs text-muted-foreground'>
              <span className='no-wrap group-data-[collapsible=icon]:hidden'>
                Certificate Management:
              </span>{' '}
              v2.23
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
