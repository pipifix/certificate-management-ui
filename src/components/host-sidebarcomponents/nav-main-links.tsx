// This components builds the collapsible sidebar elements group at the global sidebar which holds the links to the specific application modules.
// It describes the navbar link types and uses the shadcn ui sidebar components

// nav-main-links.tsx
import { ChevronRight, LayoutDashboard } from 'lucide-react'
import useCheckActiveNav from '@/hooks/use-check-active-nav'
import { NavItem, SubItem } from '@/types/nav' // Importiere die Typen
import { tempUser } from '@/data/user-context-data/temp-user-1'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

interface NavMainLinksProps {
  items: NavItem[]
}

export function NavMainLinks({ items }: NavMainLinksProps) {
  const { checkActiveNav } = useCheckActiveNav()

  // Funktion zum Rendern der Module basierend auf den Nutzerrechten
  const RenderModuleRight = (subItem: SubItem) => {
    if (
      subItem.right &&
      tempUser.rights &&
      tempUser.rights.includes(subItem.right)
    ) {
      return (
        <SidebarMenuSubItem key={subItem.title}>
          <SidebarMenuSubButton
            isActive={checkActiveNav(subItem.url)}
            asChild
            className='hover:text-primary data-[active=true]:border data-[active=true]:border-primary/20 data-[active=true]:bg-blue-50 data-[active=true]:text-primary'
          >
            <a href={subItem.url} className='gap-2'>
              {subItem.icon && (
                //
                <subItem.icon className='color:text-inherit hover:text-inherit' />
              )}
              <span>{subItem.title}</span>
            </a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      )
    }
    // Nicht rendern, wenn der Nutzer keine Berechtigung hat
    return null
  }

  // Funktion zum Rendern der Applikationslinks basierend auf den Nutzerrechten
  const RenderApplicationLink = (item: NavItem) => {
    // Überprüfe, ob der Nutzer Zugriff auf die Anwendung hat
    if (item.app && tempUser.apps && tempUser.apps.includes(item.app)) {
      // Rendern der Module und Filtern von null-Werten
      const renderedSubItems = item.items
        ?.map(RenderModuleRight)
        .filter(Boolean)

      // Nur rendern, wenn es Module gibt, auf die der Nutzer Zugriff hat
      if (renderedSubItems && renderedSubItems.length > 0) {
        return (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className='group/collapsible data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down transition-all'
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  isActive={checkActiveNav(item.url)}
                  tooltip={item.title}
                  className='data-[active=true]:border data-[active=true]:border-primary/20 data-[active=true]:bg-blue-50 data-[active=true]:text-primary'
                >
                  {item.icon && <item.icon className='opacity-50' />}
                  <span>{item.title}</span>
                  <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className='CollapsibleContent'>
                <SidebarMenuSub>{renderedSubItems}</SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        )
      }
    }
    // Nicht rendern, wenn der Nutzer keine Berechtigung hat oder keine Module verfügbar sind
    return null
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            isActive={checkActiveNav('/')}
            tooltip={'Dashboard'}
            className='data-[active=true]:border data-[active=true]:border-primary/20 data-[active=true]:bg-blue-50 data-[active=true]:text-primary'
          >
            <a href='/' className='gap-2'>
              <LayoutDashboard className='flex items-center gap-2' />
              <span>Dashboard</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarGroupLabel>Anwendungen</SidebarGroupLabel>
      <SidebarMenu>{items.map(RenderApplicationLink)}</SidebarMenu>
    </SidebarGroup>
  )
}
