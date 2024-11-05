import { Layout } from '@/components/custom/layout'
import AppHeader from '@/components/host-headercomponents/app-header'
import { keyDataCards } from '@/pages/functions/data/statistic-cards-data'
import StatisticCard from '@/pages/functions/components/statistic-card'

export default function Dashboard() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-6 flex items-center justify-between space-y-2'>
          <div>
            <h1 className='font-bold text-2xl tracking-tight'>Übersicht</h1>

            <p className='mt-2 text-muted-foreground'>
              All certificates and keys in an overview
            </p>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='grid-cols grid auto-rows-[minmax(0,_1fr)] gap-5 sm:grid-cols-1 lg:grid-cols-2'>
            {keyDataCards.map((card, index) => (
              <StatisticCard key={index} card={card} />
            ))}
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}
