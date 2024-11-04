import { Layout } from '@/components/custom/layout'
import DummyContent from '@/components/custom/dummy-content'
import AppHeader from '@/components/host-headercomponents/app-header'
import { FileUploadStep } from '../module-crypto/decryption/components/FileUploadStep'
import { useState } from 'react'

export default function ImportNewCertificates() {
  const [files, setFiles] = useState<File[]>([])
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='container mb-2 flex items-center justify-between space-y-2'>
          <h1 className='font-bold text-2xl tracking-tight'>
            Import von Zertifikaten
          </h1>
        </div>
        <FileUploadStep files={files} setFiles={setFiles} />
        <DummyContent title='Page is under construction' />
      </Layout.Body>
    </Layout>
  )
}
