import { Layout } from '@/components/custom/layout'
import DummyContent from '@/components/custom/dummy-content'
import AppHeader from '@/components/host-headercomponents/app-header'
import BlankStateGenericFiles from '@/components/svg/BlankStateGenericFiles'
import { Card } from '@/components/ui/card'

export default function PrivateKeys() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2 text-foreground'>
          <h1 className='font-bold text-2xl tracking-tight '>
            Private Keys
          </h1>
        </div>
        <div  className='flex flex-col gap-4'>
         <h2 className='font-medium text-xl space-x-4'>Page is under construction</h2>
        <Card  className='h-[50vh] rounded-xl border md:min-h-min flex justify-center items-center'>
          <div ><BlankStateGenericFiles/><p className='text-center text-foreground flex-grow-1'>No items found!</p></div>
        </Card></div>
      </Layout.Body>
    </Layout>
  )
}
 