import { Row } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { PublicCertificate } from '@/types/certificates'
import { Eye, ShieldQuestion } from 'lucide-react'

interface DataTableActionsProps {
  row: Row<PublicCertificate>
  onView: (certificate: PublicCertificate) => void
  onToggleActive: (id: string, value: boolean) => void
}

export function DataTableActions({
  row,
  onView,
  onToggleActive,
}: DataTableActionsProps) {
  return (
    <div className='flex items-center gap-7'>
      <Switch
        checked={row.original.isActive}
        onCheckedChange={(value) => onToggleActive(row.original.id, value)}
      />
      <Button variant='subtle' size='sm' onClick={() => onView(row.original)}>
        <Eye />
      </Button>
      <Button variant='subtle' size='sm'>
        <ShieldQuestion />
      </Button>
    </div>
  )
}
