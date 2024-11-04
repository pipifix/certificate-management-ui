import { Layout } from '@/components/custom/layout'
import DummyContent from '@/components/custom/dummy-content'
import AppHeader from '@/components/host-headercomponents/app-header'
import { FileUploadStep } from '../module-crypto/decryption/components/FileUploadStep'
import { useState } from 'react'
import { Card, CardHeader } from '@/components/ui/card'
export default function ImportNewPrivateKeys() {
  const [files, setFiles] = useState<File[]>([])
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='font-bold text-2xl tracking-tight'>Import von privaten Schlüsseln</h1>
        </div>
        <Card className='p-3 h-full'>
          <CardHeader>Bitte laden Sie Ihre privaten Schlüssel hoch</CardHeader>
        <FileUploadStep files={files} setFiles={setFiles} />
        </Card>
      </Layout.Body>
    </Layout>
  )
}