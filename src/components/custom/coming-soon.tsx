import React from 'react'
import { Rocket } from 'lucide-react'

interface ComingSoonProps {
  title?: string
}
const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <div className='h-svh min-h-14'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <Rocket size={72} />
        {title && <h1 className='font-bold text-4xl leading-tight'>{title}</h1>}
        <h2 className='font-bold text-2xl text-primary'>Coming Soon 👀</h2>
        <p className='text-center text-muted-foreground'>
          This page has not been created yet. <br />
          Stay tuned though!
        </p>
      </div>
    </div>
  )
}
export default ComingSoon
