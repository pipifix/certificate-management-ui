import { Outlet } from 'react-router-dom'

/* import Sidebar from '@/components/old-democomponents/sidebar'
import SkipToMain from '@/components/old-democomponents/skip-to-main' */
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/host-sidebarcomponents/app-sidebar'
import { Suspense } from 'react'
import { hourglass } from 'ldrs'

hourglass.register()

export default function AppShell() {
  /* const [isCollapsed, setIsCollapsed] = useIsCollapsed() */
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='relative h-full overflow-hidden bg-background'>
        <main
          id='content'
          className='overflow-x-hidden transition-[margin] md:overflow-y-hidden md:pt-0'
        >
          <Suspense
            fallback={
              <div className='flex flex-col items-center justify-center'>
                <l-hourglass
                  size='40'
                  bg-opacity='0.1'
                  speed='1.75'
                  color='currentColor'
                ></l-hourglass>
                <h2>...Loding</h2>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
