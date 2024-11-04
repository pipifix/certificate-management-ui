import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { ModuleSidebarItem } from '@/types/nav'
import { LucideIcon } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

/* interface ModuleSidebarItemProps {
  items: {
    title: string
    title_en?: string
    icon?: LucideIcon
    url: string
  }[]
} */

interface ModuleSidebarItemProps extends React.HTMLAttributes<HTMLElement> {
  items: ModuleSidebarItem[]
}

export default function SidebarNav({
  items,
  ...props
}: ModuleSidebarItemProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [val, setVal] = useState(pathname ?? '/settings')

  const handleSelect = (e: string) => {
    setVal(e)
    navigate(e)
  }

  return (
    <>
      <div className='p-1 md:hidden'>
        <Select value={val} onValueChange={handleSelect}>
          <SelectTrigger className='h-12 sm:w-48'>
            <SelectValue placeholder='Theme' />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.url} value={item.url}>
                <div className='flex gap-x-4 px-2 py-1'>
                  <span>
                    {item.icon && <item.icon className='opacity-50' />}
                  </span>
                  <span className='text-md'>{item.title}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='hidden w-full overflow-x-auto bg-background px-1 py-2 md:block'>
        <nav
          className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1')}
          {...props}
        >
          {items.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                pathname === item.url
                  ? 'bg-muted hover:bg-muted'
                  : 'hover:bg-transparent hover:underline',
                'justify-start'
              )}
            >
              <span className='mr-2'>
                {item.icon && <item.icon className='opacity-50' />}
              </span>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
