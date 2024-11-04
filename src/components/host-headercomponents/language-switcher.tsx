// this component should switch the general application language
// the state (which language is selected) should be store in the global shared redux store

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function LanguageSwitcher() {
  const [language, setLanguage] = React.useState('Deutsch')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='relative m-0 flex flex-row justify-items-center p-0'
        >
          <Languages className='b-2 m-2 flex h-5 w-5 text-foreground' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='font-medium text-sm leading-none'>
              Wähle eine Sprache aus
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value='Deutsch'>Deutsch</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='English'>
            Englisch
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Francais'>
            Französisch
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
