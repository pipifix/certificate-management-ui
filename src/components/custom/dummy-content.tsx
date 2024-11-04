import React from 'react'
import { Card } from '../ui/card'

interface DummyContentProps {
  title: string
}

const DummyContent: React.FC<DummyContentProps> = ({ title }) => {
  return (
    <div id='dummy-content' className='flex-0 flex flex-col gap-4 p-0'>
      {title && <h1 className='font-medium text-xl'>{title}</h1>}
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <Card className='aspect-video rounded-xl border' />
        <Card className='aspect-video rounded-xl border' />
        <Card className='aspect-video rounded-xl border' />
      </div>
      <Card className='h-[50vh] rounded-xl border md:min-h-min' />
    </div>
  )
}

export default DummyContent
