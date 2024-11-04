import { Table } from '@tanstack/react-table'
import { Input } from '@/components/ui/input'
import { PublicCertificate } from '@/types/certificates'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import {
  CalendarIcon,
  ChevronDown,
  Download,
  ToggleLeft,
  Trash2,
  X,
} from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
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
import { useState } from 'react'
import { Separator } from '@/components/ui/separator'

interface DataTableHeaderProps {
  table: Table<PublicCertificate>
  selectedCount: number
  onExport: () => void
  onDelete: () => void
  onDeactivate: () => void
}

export function DataTableHeader({
  table,
  selectedCount,
  onExport,
  onDelete,
  onDeactivate,
}: DataTableHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const resetFilters = () => {
    table.getAllColumns().forEach((column) => {
      column.setFilterValue(undefined)
    })
  }

  return (
    <div className='space-y-4 py-4'>
      <div className='flex items-center justify-between'>
        {selectedCount > 0 ? (
          <div className='flex items-center gap-2'>
            <span className='font-bold text-sm text-foreground'>
              {selectedCount} selected certificate(s)
            </span>
            <Separator orientation='vertical' className='h-4' />
            <Button
              variant='outline'
              size='sm'
              onClick={onExport}
              className='h-8'
            >
              <Download className='mr-2 h-4 w-4' />
              Export
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={onDeactivate}
              className='h-8'
            >
              <ToggleLeft className='mr-2 h-4 w-4' />
              Deactivate
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={onDelete}
              className='h-8 text-destructive hover:text-destructive'
            >
              <Trash2 className='mr-2 h-4 w-4' />
              Delete
            </Button>
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
            <Input
              placeholder='Filter alias...'
              value={
                (table.getColumn('alias')?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn('alias')?.setFilterValue(event.target.value)
              }
            />
            <Input
              placeholder='Filter owner...'
              value={
                (table.getColumn('owner_cn')?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn('owner_cn')?.setFilterValue(event.target.value)
              }
            />
            <Input
              placeholder='Filter authority...'
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
          </div>
        )}
        <Button variant='secondary' onClick={resetFilters} className='ml-2'>
          <X className='mr-2 h-4 w-4' />
          Reset
        </Button>
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className='flex items-center justify-between'>
          <CollapsibleTrigger asChild>
            <Button variant='ghost' size='sm' className='p-0'>
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', {
                  'rotate-180 transform': isOpen,
                })}
              />
              <span className='ml-2'>Advanced Filters</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className='mt-4'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
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
            <Input
              placeholder='Filter signing algorithm...'
              value={
                (table
                  .getColumn('signing_algorithm')
                  ?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table
                  .getColumn('signing_algorithm')
                  ?.setFilterValue(event.target.value)
              }
            />
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
                      <span>Valid from</span>
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
                        'dd.MM.yyyy'
                      )
                    ) : (
                      <span>Valid till</span>
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
