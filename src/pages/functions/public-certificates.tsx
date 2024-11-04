import { Layout } from '@/components/custom/layout'
import AppHeader from '@/components/host-headercomponents/app-header'
import { CertificatesTable } from './components/public-certificates/certificate-table'
import { certificates } from '@/pages/functions/data/public-certificates'
import { Button } from '@/components/ui/button'
import {
  Trash2,
  LifeBuoy,
  Search,
  ShieldQuestion,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

export default function PublicCertificates() {
  return (
    <Layout>
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      <Layout.Body>
        <div className='mb-6 flex items-center justify-between space-y-2'>
          <div>
            <h1 className='font-bold text-2xl tracking-tight'>
              Public Certificates
            </h1>
            <p className='mt-2 text-muted-foreground'>
              Manage and monitor your public certificates
            </p>
          </div>
          <div>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant='outline'>
                  <LifeBuoy className='h4 mr-2 w-4 opacity-50' />
                  Hilfe
                </Button>
              </DrawerTrigger>
              <DrawerContent className=''>
                <DrawerHeader>
                  <DrawerTitle>Hilfe</DrawerTitle>
                </DrawerHeader>
                <div className='p-5'>
                  <div>
                    Dieser Bereich zeigt eine Übersicht über bereits importierte
                    öffentliche Zertifikate.
                  </div>
                  <div>
                    Deren Validierungsstatus wird farblich wie folgt
                    visualisiert:
                  </div>
                  <ul>
                    <li className='mb-2 bg-white'>
                      weiß (OK): Zertifikat ist gültig, keine Fehler bei der
                      Prüfung
                    </li>
                    <li className='mb-2 bg-orange-200'>
                      gelb (Warnung) : Zertifikat läuft ab und/oder Fehler bei
                      der Prüfung
                    </li>
                    <li className='mb-2 bg-destructive/20'>
                      rot (Fehler) : Zertifikat abgelaufen und/oder ungültig
                    </li>
                  </ul>
                  <p>
                    Für diese Zertifikate können Sie sich weitere Informationen
                    anzeigen lassen <Search className='inline' />, es auf
                    Gültigkeit prüfen / validieren
                    <ShieldQuestion className='inline' /> , für die
                    Verschlüsselung aktivieren <ToggleLeft className='inline' />
                    bzw. deaktivieren
                    <ToggleRight className='inline' />
                    oder es markieren und anschließend löschen (
                    <Trash2 className='inline' />
                    ).
                  </p>
                  <p>
                    Zum besseren Überblick kann eine Such- und Filterfunktion
                    per Klick auf "Suche" aufgerufen werden. Über den Button
                    "Zertifikatsimport" gelangen Sie zum Import-Manager im
                    Bereich "Übersicht" und können dort weitere Zertifikate in
                    das System importieren.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant='outline'>close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <CertificatesTable certificates={certificates} />
      </Layout.Body>
    </Layout>
  )
}
