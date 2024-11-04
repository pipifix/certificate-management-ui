// this component is only visible when the user is a orga admin or a group admin
// it should be exposed by the orga-management-module

import { Button } from '@/components/ui/button'
import {
  Factory,
  Users,
  Network,
  Contact,
  ShieldCheck,
  ChevronDown,
  Globe,
  ShoppingCart,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'

export function CompanyDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='menu'
          className='relative m-0 border-0 p-0'
        >
          <Factory className='b-2 m-2 h-4 w-6 text-primary' />
          procilon GmbH
          <ChevronDown className='mx-2 h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-60' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='font-medium text-sm leading-none'>
              Organisationsverwaltung
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Factory className='mr-1 h-4 w-4' />
            <Link to='/organization'>Organisationsdaten</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className='mr-1 h-4 w-4' />
            <Link to='/organization/employees'>Mitarbeiterverwaltung</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Contact className='mr-1 h-4 w-4' />
            <Link to='/organization/guests'>Gästeverwaltung</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Network className='mr-1 h-4 w-4' />

            <Link to='/organization/departments'>Abteilungen und Gruppen</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShieldCheck className='mr-1 h-4 w-4' />
            <Link to='/organization/certificates'>Zertifikate</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Globe className='mr-1 h-4 w-4' />
            <Link to='/organization/domains'> Domains</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <ShoppingCart className='mr-1 h-4 w-4' />
          Shop + Rechnungen
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
