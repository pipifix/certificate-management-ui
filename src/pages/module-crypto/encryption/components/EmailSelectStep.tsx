import { useState } from 'react'
import { Command } from 'cmdk'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const mockEmails = [
  'john.doe@example.com',
  'jane.smith@example.com',
  'bob.wilson@example.com',
  'alice.johnson@example.com',
  'charlie.brown@example.com',
]

interface EmailSelectStepProps {
  selectedEmails: string[]
  setSelectedEmails: (emails: string[]) => void
}

export function EmailSelectStep({
  selectedEmails,
  setSelectedEmails,
}: EmailSelectStepProps) {
  const [search, setSearch] = useState('')

  const filteredEmails = mockEmails.filter(
    (email) =>
      email.toLowerCase().includes(search.toLowerCase()) &&
      !selectedEmails.includes(email)
  )

  const addEmail = (email: string) => {
    setSelectedEmails([...selectedEmails, email])
    setSearch('')
  }

  const removeEmail = (emailToRemove: string) => {
    setSelectedEmails(selectedEmails.filter((email) => email !== emailToRemove))
  }

  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <Command className='rounded-lg border shadow-md'>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search emails...'
            className='border-0 focus:ring-0'
          />
          {search && filteredEmails.length > 0 && (
            <Command.List className='max-h-40 overflow-y-auto p-2'>
              {filteredEmails.map((email) => (
                <Command.Item
                  key={email}
                  onSelect={() => addEmail(email)}
                  className='cursor-pointer rounded px-2 py-1.5 hover:bg-gray-100'
                >
                  {email}
                </Command.Item>
              ))}
            </Command.List>
          )}
        </Command>
      </div>

      {selectedEmails.length > 0 && (
        <div className='space-y-2'>
          <h3 className='font-medium'>Selected Recipients</h3>
          <div className='space-y-2'>
            {selectedEmails.map((email) => (
              <div
                key={email}
                className='flex items-center justify-between rounded-lg bg-gray-50 p-3'
              >
                <span>{email}</span>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => removeEmail(email)}
                >
                  <X className='h-4 w-4' />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
