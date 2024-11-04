// this component provides a link navigation to special pages
// currently it is not visible at the app-header

import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { IconMenu } from '@tabler/icons-react'
import { TopNavItem } from '@/types/nav' // Importiere die Typen

interface TopNavProps {
  links: TopNavItem[]
}

export function TopNav({ links, ...props }: TopNavProps) {
  return (
    <>
      <div className='md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant='outline'>
              <IconMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side='bottom' align='start'>
            {links.map(({ title, href, isActive }) => (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link
                  to={href}
                  className={!isActive ? 'text-primary' : ''}
                >
                  {title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav
        className={cn('hidden items-center space-x-4 md:flex lg:space-x-6')}
        {...props}
      >
        {links.map(({ title, href, isActive }) => (
          <Link
            key={`${title}-${href}`}
            to={href}
            className={`font-medium text-sm transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  )
}
