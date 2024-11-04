// this components reflect functionality thats not in the proTECTr, right now.It uses the shadcn ui sidebar components
// But with a larger view on the proTECTr as a good SAAS Plattform we should consider this functionality
// Please comment this out as long the functionality is not given from the procilon, pESA backend

import { Files, Share2, Store } from 'lucide-react'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavFeatureRequestLinks() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Sicherer Dokumentenaustausch</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='hover:text-primary data-[active=true]:border data-[active=true]:border-primary/20 data-[active=true]:bg-blue-50 data-[active=true]:text-primary'
              tooltip={'Clouddokumente'}
            >
              <a href='./' className='gap-2'>
                <Files className='flex items-center gap-2' />
                <span>Clouddokumente</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='hover:text-primary data-[active=true]:border data-[active=true]:border-primary/20 data-[active=true]:bg-blue-50 data-[active=true]:text-primary'
              tooltip={'Freigegebene Dokumente'}
            >
              <a href='./' className='gap-2'>
                <Share2 className='flex items-center gap-2' />
                <span>Freigegebene Dokumente</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Weitere Produkte erwerben</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='hover:text-primary data-[active=true]:border data-[active=true]:border-primary/20 data-[active=true]:bg-blue-50 data-[active=true]:text-primary'
              tooltip={'Shop'}
            >
              <a href='./' className='gap-2'>
                <Store className='flex items-center gap-2' />
                <span>Shop</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  )
}
