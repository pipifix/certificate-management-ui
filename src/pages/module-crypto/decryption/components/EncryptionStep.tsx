import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface EncryptionStepProps {
  onComplete: () => void
}

export function EncryptionStep({ onComplete }: EncryptionStepProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          onComplete()
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className='space-y-8 text-center'>
      {!isComplete ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className='mx-auto h-20 w-20'
          >
            <Shield className='h-full w-full text-primary' />
          </motion.div>
          <div className='space-y-4'>
            <h3 className='font-medium text-xl'>Encrypting Files</h3>
            <Progress value={progress} className='w-full' />
            <p className='text-sm text-gray-500'>
              Please wait while we encrypt your files...
            </p>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='space-y-4'
        >
          <CheckCircle className='mx-auto h-20 w-20 text-green-500' />
          <h3 className='font-medium text-xl text-green-600'>
            Encryption Complete!
          </h3>
          <p className='text-gray-600'>
            Your files have been securely encrypted and are ready to share.
          </p>
        </motion.div>
      )}
    </div>
  )
}
