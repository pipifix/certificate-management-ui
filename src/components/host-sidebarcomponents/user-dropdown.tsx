import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'
import {
  BadgeCheck,
  Headset,
  ChevronsUpDown,
  LogOut,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export function UserDropdown() {
  return (
    <SidebarMenu className='m-x-3 p-2'>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className='border-color-muted border'>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar className='h-8 w-8 rounded-lg'>
                {/* <AvatarImage
                        src={data.user.avatar}
                        alt={data.user.name}
                      /> */}
                <AvatarFallback className='rounded-lg bg-primary text-primary-foreground'>
                  PA
                </AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>
                  {/* {data.user.name} */}
                  proGOV Administrator
                </span>
                <span className='truncate text-xs'>
                  progov-admin@procilon.de
                </span>
              </div>
              <ChevronsUpDown className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            side='bottom'
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8 rounded-lg'>
                  {/* <AvatarImage
                          src={data.user.avatar}
                          alt={data.user.name}
                        /> */}
                  <AvatarFallback className='rounded-lg'>PA</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>
                    proGOV Administrator
                  </span>
                  <span className='truncate text-xs'>
                    progov-admin@procilon.de
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link to='/doc'>Handbuch</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link className='w-full' to='https://www.protctr.com/support'>
                  Support
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to='/sign-in'>Log out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
