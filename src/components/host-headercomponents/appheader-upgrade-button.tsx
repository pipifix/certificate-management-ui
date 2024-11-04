// this component is visible when the user is a basic user (no business account)
// may its a good decicion to make this configurable (put the links into the '/src/data/nav-links/user-link' file)

import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function UpgradeButton() {
  return (
    <Link
      to='./sign-up'
      className={cn(
        buttonVariants({ variant: 'default', size: 'menu' }),
        'bg-orange-600'
      )}
    >
      Konto-Upgrade
    </Link>
  )
}
