import { Button } from '@/components/ui/button'
import DummyContent from '@/components/custom/dummy-content'

export default function OrganizationOverview() {
  return (
    <div>
      <div className='mb-2 flex items-center justify-between space-y-2'>
        <h1 className='font-bold text-2xl tracking-tight'>
          Organization Overview
        </h1>
      </div>
      <DummyContent title='Module is coming soon' />
    </div>
  )
}
