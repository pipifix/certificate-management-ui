import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function LoginButton() {
  return (
    <Link
      to='/sign-in-2'
      className={cn(buttonVariants({ variant: 'default' }))}
    >
      Anmelden
    </Link>
  )
}
