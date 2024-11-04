// this component is visible to all protectr users
// may its a good decicion to make this configurable (put the links into the '/src/data/nav-links/user-link' file)

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/host-headercomponents/login-button'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { tempUser } from '@/data/user-context-data/temp-user-1'

export function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='relative m-0 h-10 w-10 border-0 p-0'
        >
          <Avatar className='h-10 w-10'>
            <AvatarImage
              src='/avatars/01.png'
              aria-hidden
              alt='Profile Image od User'
            />
            <AvatarFallback
              aria-hidden
              className='dark:blue-300 b-0 h-10 bg-primary text-white hover:bg-blue-600 dark:text-primary-foreground'
            >
              TA
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1 text-sm'>
            <p className='leading-2 font-bold text-primary'>
              {tempUser.firstName} {tempUser.familyName}
            </p>
            <p className='text-xs leading-relaxed text-slate-400'>
              {tempUser.accountType && <span>{tempUser.accountType}</span>}
              {tempUser.isAdmin && <span> - Admin</span>}
            </p>
            <p className='leading-pretty text-xs text-slate-400'>
              {tempUser.email ? (
                <>
                  {tempUser.accountType !== 'Businesskonto' ? (
                    <span>{tempUser.email}</span>
                  ) : (
                    <span>{tempUser.companyEmail}</span>
                  )}
                </>
              ) : (
                <LoginButton />
              )}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to='/profile/display'>Profileinstellungen </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to='/profile/account'>Konto und Sicherheit</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to='/addressbook'>Adressbuch </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to='/sign-in-2'>Log out</Link>
          <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
