import { Layout } from '@/components/custom/layout'
import DummyContent from '@/components/custom/dummy-content'
import AppHeader from '@/components/host-headercomponents/app-header'

export default function HelpPage() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='font-bold text-2xl tracking-tight'>
            Hilfeseiten
          </h1>
        </div>
        <DummyContent title='Page is under construction'/>
      </Layout.Body>
    </Layout>
  )
}
