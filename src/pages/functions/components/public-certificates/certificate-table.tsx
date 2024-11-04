import { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PublicCertificate } from '@/types/certificates'
import { DataTableHeader } from './table-header-filter'
import { DataTableActions } from './table-actions'
import { DataTableFooter } from './table-footer'
import { CertificateSheet } from './certificate-sheet'
import { StatusIcon } from './status-icon'
import { format, parseISO } from 'date-fns'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'

interface CertificatesTableProps {
  certificates: PublicCertificate[]
}

export function CertificatesTable({
  certificates: initialCertificates,
}: CertificatesTableProps) {
  const [certificates, setCertificates] = useState(initialCertificates)
  const [selectedCertificate, setSelectedCertificate] =
    useState<PublicCertificate | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [sorting, setSorting] = useState([])
  const [rowSelection, setRowSelection] = useState({})

  const handleToggleActive = (id: string, newValue: boolean) => {
    setCertificates((prev) =>
      prev.map((cert) =>
        cert.id === id ? { ...cert, isActive: newValue } : cert
      )
    )
  }

  const handleUpdateCertificate = (updatedCertificate: PublicCertificate) => {
    setCertificates((prev) =>
      prev.map((cert) =>
        cert.id === updatedCertificate.id ? updatedCertificate : cert
      )
    )
    setSelectedCertificate(updatedCertificate)
  }

  const handleBulkExport = () => {
    const selectedIds = Object.keys(rowSelection)
    toast.success(`Exporting ${selectedIds.length} certificates`)
    setRowSelection({})
  }

  const handleBulkDelete = () => {
    const selectedIds = Object.keys(rowSelection)
    toast.success(`Deleting ${selectedIds.length} certificates`)
    setRowSelection({})
  }

  const handleBulkDeactivate = () => {
    const selectedIds = Object.keys(rowSelection)
    toast.success(`Deactivating ${selectedIds.length} certificates`)
    setRowSelection({})
  }

  const columns: ColumnDef<PublicCertificate>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
          onClick={(e) => e.stopPropagation()}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'alias',
      header: ({ column }) => (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      ),
      filterFn: 'includesString',
    },
    {
      accessorKey: 'email',
      header: ({ column }) => (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      ),
      filterFn: 'includesString',
    },
    {
      accessorKey: 'owner_cn',
      header: ({ column }) => (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Owner
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      ),
      filterFn: 'includesString',
    },
    {
      accessorKey: 'authority_cn',
      header: ({ column }) => (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Authority
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      ),
      filterFn: 'includesString',
    },
    {
      accessorKey: 'serialnumber_hex',
      header: ({ column }) => (
        <>
          <span className='mr-2'>Seriennummer</span>
          <Button
            className='p-1'
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <ArrowUpDown className='h-4 w-4 text-primary' />
          </Button>
        </>
      ),
      filterFn: 'includesString',
    },
    {
      accessorKey: 'signing_algorithm',
      header: ({ column }) => (
        <>
          <span className='mr-2'>Algorithmus</span>
          <Button
            className='p-1'
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <ArrowUpDown className='h-4 w-4 text-primary' />
          </Button>
        </>
      ),
      filterFn: 'includesString',
    },
    {
      accessorKey: 'validFrom',
      header: ({ column }) => (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Gültig von
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      ),
      cell: ({ row }) => format(parseISO(row.original.validFrom), 'dd.MM.yyyy'),
      filterFn: (row, id, value: Date) => {
        if (!value) return true
        const cellDate = parseISO(row.getValue(id))
        return cellDate >= value
      },
    },
    {
      accessorKey: 'validTill',
      header: ({ column }) => (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Gültig bis
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      ),
      cell: ({ row }) => format(parseISO(row.original.validTill), 'dd.MM.yyyy'),
      filterFn: (row, id, value: Date) => {
        if (!value) return true
        const cellDate = parseISO(row.getValue(id))
        return cellDate <= value
      },
    },
    {
      id: 'status',
      header: 'Status',
      cell: ({ row }) => <StatusIcon certificate={row.original} />,
      filterFn: (row, id, value: string) => {
        if (!value || value === 'all') return true
        const cert = row.original
        switch (value) {
          case 'error':
            return !!cert.message_error
          case 'warning':
            return !!cert.message_warning
          case 'valid':
            return !cert.message_error && !cert.message_warning
          default:
            return true
        }
      },
    },
    {
      id: 'actions',
      header: 'Aktivieren / Anzeigen / Prüfen',
      cell: ({ row }) => (
        <DataTableActions
          row={row}
          onView={(certificate) => {
            setSelectedCertificate(certificate)
            setSheetOpen(true)
          }}
          onToggleActive={handleToggleActive}
        />
      ),
    },
  ]

  const table = useReactTable({
    data: certificates,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
    initialState: {
      columnVisibility: {
        signing_algorithm: false,
        serialnumber_hex: false,
      },
    },
  })

  return (
    <div className='space-y-4'>
      <DataTableHeader
        table={table}
        selectedCount={Object.keys(rowSelection).length}
        onExport={handleBulkExport}
        onDelete={handleBulkDelete}
        onDeactivate={handleBulkDeactivate}
      />

      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className='cursor-pointer hover:bg-muted/50'
                onClick={() => {
                  setSelectedCertificate(row.original)
                  setSheetOpen(true)
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DataTableFooter table={table} />

      <CertificateSheet
        certificate={selectedCertificate}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        onUpdate={handleUpdateCertificate}
      />
    </div>
  )
}
