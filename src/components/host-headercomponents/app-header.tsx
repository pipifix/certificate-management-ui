import ThemeSwitch from '@/components/theme-switch'
import { LanguageSwitcher } from './language-switcher'
import { TopNav } from '@/components/host-headercomponents/top-nav'
// import { topNavLinks } from '@/data/nav-links/top-nav-links'
import { SidebarTrigger } from '@/components/ui/sidebar'

export default function AppHeader() {
  return (
    <>
      <div className='flex items-center gap-2'>
        <SidebarTrigger className='-ml-1 opacity-55 hover:opacity-90' />
      </div>
      <div>
        {/* <TopNav links={topNavLinks.links} /> */}
        <div className='text-bold text-xl leading-tight'>
          Certificate Management (proGOV)
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <LanguageSwitcher />
        <ThemeSwitch />
      </div>
    </>
  )
}
