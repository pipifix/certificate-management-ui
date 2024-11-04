import { Button } from '@/components/ui/button'
import { FileUploadStep } from './FileUploadStep'
import { EmailSelectStep } from './EmailSelectStep'
import { EncryptionStep } from './EncryptionStep'
import { CheckCircle } from 'lucide-react'
import { defineStepper } from '@stepperize/react'
import { useState } from 'react'

import { Separator } from '@radix-ui/react-separator'
import React from 'react'
import { Card } from '@/components/ui/card'

const { useStepper, steps } = defineStepper(
  {
    id: 'choosedocuments',
    title: 'Dokumente auswählen',
    description:
      'Bitte wählen Sie ein oder meherere Dokumente aus, die verschlüsselt werden sollen.',
  },
  {
    id: 'choosereceivers',
    title: 'Empfänger auswählen',
    description:
      'Bitte wählen Sie diejenigen Kontaktpersonen, Mitarbeiter oder Gäste aus, für die sie die Dokumente verschlüsseln wollen. Es können auch Abteilungen als Empfänger ausgewählt werden.',
  },
  {
    id: 'decryptdocuments',
    title: 'Entschlüsseln und speichern',
    description:
      'Die ausgewählten Dokumente werden verschlüsselt und an die Empfänger versendet',
  }
)

export function FileWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [files, setFiles] = useState<File[]>([])
  const [selectedEmails, setSelectedEmails] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const handleComplete = () => {
    setIsComplete(true)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setFiles([])
    setSelectedEmails([])
    setIsComplete(false)
  }

  const stepper = useStepper()

  return (
    <Card className='mx-auto w-full max-w-7xl p-5'>
      <div className='flex justify-between'>
        <div>
          <h2 className='font-medium text-lg'>{stepper.current.title}</h2>
          <div className='font-medium text-sm text-muted-foreground'>
            {stepper.current.description}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='text-sm text-muted-foreground'>
            Schritt {stepper.current.index + 1} of {steps.length}
          </div>
        </div>
      </div>
      <nav aria-label='Wizard Steps' className='group my-5'>
        <ol
          className='flex items-center justify-between gap-2'
          aria-orientation='horizontal'
          role='list'
        >
          {stepper.all.map((step, index, array) => (
            <React.Fragment key={step.id}>
              <li className='flex flex-shrink-0 items-center gap-4'>
                <Button
                  type='button'
                  role='tab'
                  variant={
                    index <= stepper.current.index ? 'default' : 'secondary'
                  }
                  aria-current={
                    stepper.current.id === step.id ? 'step' : undefined
                  }
                  aria-posinset={index + 1}
                  aria-setsize={steps.length}
                  aria-selected={stepper.current.id === step.id}
                  className='flex size-10 items-center justify-center rounded-full'
                  onClick={() => stepper.goTo(step.id)}
                >
                  {index + 1}
                </Button>
                <span className='font-medium'>{step.title}</span>
              </li>
              {index < array.length - 1 && (
                <Separator
                  className={`flex-1 ${
                    index < stepper.current.index ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
      <div role='label' className='mb-1 mt-2'>
        Dokumentenupload
      </div>
      <div className='space-y-4'>
        {stepper.switch({
          choosedocuments: () => (
            <FileUploadStep files={files} setFiles={setFiles} />
          ),
          choosereceivers: () => (
            <EmailSelectStep
              selectedEmails={selectedEmails}
              setSelectedEmails={setSelectedEmails}
            />
          ),
          decryptdocuments: () => (
            <EncryptionStep onComplete={handleComplete} />
          ),
        })}
        {!stepper.isLast ? (
          <div className='flex justify-end gap-4'>
            <Button
              variant='secondary'
              onClick={stepper.prev}
              disabled={stepper.isFirst}
            >
              Back
            </Button>
            <Button type='submit'>
              {stepper.isLast ? 'Complete' : 'Next'}
            </Button>
          </div>
        ) : (
          <Button onClick={stepper.reset}>Reset</Button>
        )}
      </div>
      <div className='message text-xs text-muted-foreground'></div>
    </Card>
  )
}
