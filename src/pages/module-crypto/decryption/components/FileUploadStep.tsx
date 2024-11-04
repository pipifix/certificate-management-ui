import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FileUploadStepProps {
  files: File[]
  setFiles: (files: File[]) => void
}

export function FileUploadStep({ files, setFiles }: FileUploadStepProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles])
    },
    [files, setFiles]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter((file) => file !== fileToRemove))
  }

  return (
    <div className='space-y-6'>
      <div
        {...getRootProps()}
        className={cn(
          'cursor-pointer rounded-lg border-2 border-dashed p-12 text-center transition-colors',
          isDragActive
            ? 'border-primary bg-primary/5'
            : 'border-gray-300 hover:border-primary'
        )}
      >
        <input {...getInputProps()} />
        <Upload className='mx-auto mb-4 h-12 w-12 text-gray-400' />
        <p className='font-medium text-lg'>
          {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
        </p>
        <p className='mt-2 text-sm text-muted-foreground'>
          or click to select files
        </p>
      </div>

      {files.length > 0 && (
        <div className='space-y-2'>
          <h3 className='font-medium'>Uploaded Files</h3>
          <div className='space-y-2'>
            {files.map((file, index) => (
              <div
                key={index}
                className='flex items-center justify-between rounded-lg bg-gray-50 p-3'
              >
                <span className='truncate'>{file.name}</span>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => removeFile(file)}
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
