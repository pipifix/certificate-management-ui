import { Table } from '@tanstack/react-table'
import { Input } from '@/components/ui/input'
import { PublicCertificate } from '@/types/certificates'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { CalendarIcon, X } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface DataTableHeaderProps {
  table: Table<PublicCertificate>
}

export function DataTableHeader({ table }: DataTableHeaderProps) {
  const resetFilters = () => {
    table.getAllColumns().forEach((column) => {
      column.setFilterValue(undefined)
    })
  }

  return (
    <div className='space-y-4 py-4'>
      <div className='flex items-center justify-between'>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <Input
            placeholder='Filter alias...'
            value={(table.getColumn('alias')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('alias')?.setFilterValue(event.target.value)
            }
          />
          <Input
            placeholder='Filter email...'
            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('email')?.setFilterValue(event.target.value)
            }
          />
          <Input
            placeholder='Filter Owner name...'
            value={
              (table.getColumn('owner_cn')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('owner_cn')?.setFilterValue(event.target.value)
            }
          />
          <Input
            placeholder='Filter Authority name...'
            value={
              (table.getColumn('authority_cn')?.getFilterValue() as string) ??
              ''
            }
            onChange={(event) =>
              table
                .getColumn('authority_cn')
                ?.setFilterValue(event.target.value)
            }
          />
          <Input
            placeholder='Filter algorithm...'
            value={
              (table
                .getColumn('signin_algorithm')
                ?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table
                .getColumn('signin_algorithm')
                ?.setFilterValue(event.target.value)
            }
          />
          <Input
            placeholder='Filter serial number...'
            value={
              (table
                .getColumn('serialnumber_hex')
                ?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table
                .getColumn('serialnumber_hex')
                ?.setFilterValue(event.target.value)
            }
          />
          <Select
            value={
              (table.getColumn('status')?.getFilterValue() as string) ?? ''
            }
            onValueChange={(value) =>
              table.getColumn('status')?.setFilterValue(value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='Filter status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='error'>Error</SelectItem>
              <SelectItem value='warning'>Warning</SelectItem>
              <SelectItem value='valid'>Valid</SelectItem>
            </SelectContent>
          </Select>
          <div className='flex gap-2'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className={cn(
                    'w-[140px] justify-start text-left font-normal',
                    !table.getColumn('validFrom')?.getFilterValue() &&
                      'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {table.getColumn('validFrom')?.getFilterValue() ? (
                    format(
                      table.getColumn('validFrom')?.getFilterValue() as Date,
                      'dd.MM.yyyy'
                    )
                  ) : (
                    <span>Gültig ab</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={
                    table.getColumn('validFrom')?.getFilterValue() as Date
                  }
                  onSelect={(date) =>
                    table.getColumn('validFrom')?.setFilterValue(date)
                  }
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className={cn(
                    'w-[140px] justify-start text-left font-normal',
                    !table.getColumn('validTill')?.getFilterValue() &&
                      'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {table.getColumn('validTill')?.getFilterValue() ? (
                    format(
                      table.getColumn('validTill')?.getFilterValue() as Date,
                      'PPP'
                    )
                  ) : (
                    <span>Gültig bis</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={
                    table.getColumn('validTill')?.getFilterValue() as Date
                  }
                  onSelect={(date) =>
                    table.getColumn('validTill')?.setFilterValue(date)
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Button variant='secondary' onClick={resetFilters} className='ml-2'>
          <X className='mr-2 h-4 w-4' />
          Reset Filters
        </Button>
      </div>
    </div>
  )
}