import { Outlet } from 'react-router-dom'
import { organizationSidebarNavItems } from './data/module-sidebar-links'
import { Separator } from '@/components/ui/separator'

import { Layout } from '@/components/custom/layout'
import AppHeader from '@/components/host-headercomponents/app-header'
import SidebarNav from './components/sidebar-nav'

export default function OrganizationOverview() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='flex flex-col'>
          <div className='space-y-0.5'>
            <h1 className='font-bold text-2xl tracking-tight md:text-3xl'>
              Your Organization
            </h1>
            <p className='text-muted-foreground'>
              Manage your organization data, structure and settings.
            </p>
          </div>
          <Separator className='my-4 lg:my-6' />
          <div className='flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0'>
            <aside className='top-0 lg:sticky lg:w-1/5'>
              <SidebarNav items={organizationSidebarNavItems.items} />
            </aside>
            <div className='large:w-4/5 w-full p-1 pr-4 md:overflow-y-hidden'>
              <Outlet />
            </div>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}
