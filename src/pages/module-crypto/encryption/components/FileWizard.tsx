import { useState } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileUploadStep } from './FileUploadStep'
import { EmailSelectStep } from './EmailSelectStep'
import { EncryptionStep } from './EncryptionStep'
import { CheckCircle } from 'lucide-react'

const steps = ['Upload Files', 'Select Recipients', 'Encrypt & Share']

export function FileWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [files, setFiles] = useState<File[]>([])
  const [selectedEmails, setSelectedEmails] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleComplete = () => {
    setIsComplete(true)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setFiles([])
    setSelectedEmails([])
    setIsComplete(false)
  }

  const isNextDisabled =
    (currentStep === 0 && files.length === 0) ||
    (currentStep === 1 && selectedEmails.length === 0)

  if (isComplete) {
    return (
      <Card className='mx-auto w-full max-w-2xl'>
        <CardContent className='pt-6'>
          <div className='space-y-4 text-center'>
            <CheckCircle className='mx-auto h-16 w-16 text-green-500' />
            <h2 className='font-bold text-2xl text-green-600'>Success!</h2>
            <p className='text-gray-600'>
              Your files have been encrypted and shared with{' '}
              {selectedEmails.length} recipient
              {selectedEmails.length !== 1 ? 's' : ''}.
            </p>
            <div className='mt-8'>
              <Button onClick={handleReset}>Share More Files</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='mx-auto w-full max-w-2xl'>
      <CardHeader>
        <CardTitle>{steps[currentStep]}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='mb-8'>
          <div className='flex justify-between'>
            {steps.map((step, index) => (
              <div key={step} className='flex items-center'>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    index <= currentStep
                      ? 'bg-primary text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 w-24 ${
                      index < currentStep ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {currentStep === 0 && (
          <FileUploadStep files={files} setFiles={setFiles} />
        )}
        {currentStep === 1 && (
          <EmailSelectStep
            selectedEmails={selectedEmails}
            setSelectedEmails={setSelectedEmails}
          />
        )}
        {currentStep === 2 && <EncryptionStep onComplete={handleComplete} />}
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button
          variant='outline'
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        {currentStep < steps.length - 1 && (
          <Button onClick={handleNext} disabled={isNextDisabled}>
            Next
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
