import { Layout } from '@/components/custom/layout'

import { FileWizard } from './components/FileWizard'
import AppHeader from '@/components/host-headercomponents/app-header'

export default function Decryption() {
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
            Dokumente entschlüsseln
          </h1>
        </div>
        <FileWizard />
      </Layout.Body>
    </Layout>
  )
}
