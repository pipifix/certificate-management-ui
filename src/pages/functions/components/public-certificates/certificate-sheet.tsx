import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PublicCertificate } from '@/types/certificates'
import { format, parseISO } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pencil, X } from 'lucide-react'

interface CertificateSheetProps {
  certificate: PublicCertificate | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onUpdate?: (certificate: PublicCertificate) => void
}

export function CertificateSheet({
  certificate,
  open,
  onOpenChange,
  onUpdate,
}: CertificateSheetProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [alias, setAlias] = useState(certificate?.alias ?? '')

  if (!certificate) return null

  const handleSave = () => {
    if (onUpdate && alias.trim()) {
      onUpdate({
        ...certificate,
        alias: alias.trim(),
      })
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setAlias(certificate.alias)
    setIsEditing(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className='w-[600px] sm:w-[800px]'>
        <SheetHeader>Zertifikatesdetails</SheetHeader>

        <ScrollArea className='h-[calc(100vh-8rem)] pr-4'>
          <div className='mt-6 space-y-6'>
            <div className='flex items-center justify-between'>
              {isEditing ? (
                <div className='flex items-center gap-2'>
                  <Input
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    className='text-2xl font-semibold'
                  />
                  <Button size='sm' onClick={handleSave}>
                    Save
                  </Button>
                  <Button size='sm' variant='ghost' onClick={handleCancel}>
                    <X className='h-4 w-4' />
                  </Button>
                </div>
              ) : (
                <div className='flex items-center gap-2'>
                  <SheetTitle className='text-xl'>
                    {certificate.alias}
                  </SheetTitle>
                  <Button
                    size='sm'
                    variant='ghost'
                    onClick={() => setIsEditing(true)}
                  >
                    <Pencil className='h-4 w-4' />
                  </Button>
                </div>
              )}
            </div>

            <div>
              <h3 className='mb-2 text-sm font-semibold'>Serial Number</h3>
              <p className='text-sm text-muted-foreground'>
                HEX: {certificate.serialnumber_hex}
                <br />
                DEC: {certificate.serialnumber_dec}
              </p>
            </div>

            <div>
              <h3 className='mb-2 text-sm font-semibold'>Inhaber</h3>
              <div className='space-y-2 text-sm text-muted-foreground'>
                <p>Owner: {certificate.owner_cn}</p>
                <p>Owner_Details: {certificate.owner_details}</p>
              </div>
            </div>

            <div>
              <h3 className='mb-2 text-sm font-semibold'>Aussteller</h3>
              <div className='space-y-2 text-sm text-muted-foreground'>
                <p>Authority: {certificate.authority_cn}</p>
                <p>Authority_Details: {certificate.authority_details}</p>
              </div>
            </div>

            <div>
              <h3 className='mb-2 text-sm font-semibold'>
                Gültigkeitszeitraum
              </h3>
              <div className='space-y-2 text-sm text-muted-foreground'>
                <p>
                  From: {format(parseISO(certificate.validFrom), 'dd.mm.yyyy')}
                </p>
                <p>
                  Till: {format(parseISO(certificate.validTill), 'dd.mm.yyyy')}
                </p>
              </div>
            </div>

            {certificate.signing_algorithm && (
              <div>
                <h3 className='mb-2 text-sm font-semibold'>
                  Signieralgorithmus
                </h3>
                <div className='space-y-2 text-sm text-muted-foreground'>
                  <p> {certificate.signing_algorithm}</p>
                </div>
              </div>
            )}
            {certificate.application && (
              <div>
                <h3 className='mb-2 text-sm font-semibold'>Anwendung</h3>
                <div className='space-y-2 text-sm text-muted-foreground'>
                  <p> {certificate.application}</p>
                </div>
              </div>
            )}

            {certificate.source && (
              <div>
                <h3 className='mb-2 text-sm font-semibold'>
                  Quelle <Badge variant='secondary'>{certificate.source}</Badge>
                </h3>
              </div>
            )}

            {certificate.tenants && (
              <div>
                <h3 className='mb-2 text-sm font-semibold'>Mandanten</h3>
                <div className='flex flex-wrap gap-2 text-sm'>
                  {certificate.tenants?.map((tenant, index) => (
                    <Badge key={`${tenant}-${index}`} variant='secondary'>
                      {tenant}
                    </Badge>
                  )) ?? (
                    <p className='text-sm text-muted-foreground'>
                      No tenants assigned
                    </p>
                  )}
                </div>
              </div>
            )}

            {certificate.createdAt && (
              <div>
                <h3 className='mb-2 text-sm font-semibold'>Erstellt</h3>
                <div className='space-y-2 text-sm text-muted-foreground'>
                  <p>
                    {' '}
                    am {format(
                      parseISO(certificate.createdAt),
                      'dd.mm.yyyy'
                    )}{' '}
                    durch {certificate.createdFromPerson}
                  </p>
                </div>
              </div>
            )}

            {certificate.updatedAt && (
              <div>
                <h3 className='mb-2 text-sm font-semibold'>Geändert</h3>
                <div className='space-y-2 text-sm text-muted-foreground'>
                  <p>
                    {' '}
                    am {format(
                      parseISO(certificate.updatedAt),
                      'dd.mm.yyyy'
                    )}{' '}
                    durch {certificate.updatedFromPerson}
                  </p>
                </div>
              </div>
            )}

            {certificate.updatedStatus && (
              <div>
                <h3 className='mb-2 text-sm font-semibold'>Statusänderung</h3>
                <div className='space-y-2 text-sm text-muted-foreground'>
                  <p>
                    {certificate.updatedStatus} am{' '}
                    {format(
                      parseISO(certificate.updatedStatusAt),
                      'dd.MM.yyyy'
                    )}{' '}
                    durch {certificate.updatedStatusFromPerson}
                  </p>
                </div>
              </div>
            )}

            {(certificate.message_error || certificate.message_warning) && (
              <div>
                <h3 className='mb-2 text-sm font-semibold'>Messages</h3>
                {certificate.message_error && (
                  <p className='text-sm text-destructive'>
                    {certificate.message_error}
                  </p>
                )}
                {certificate.message_warning && (
                  <p className='text-sm text-orange-500'>
                    {certificate.message_warning}
                  </p>
                )}
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
