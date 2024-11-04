import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary focus-ring:cyan text-primary-foreground hover:bg-primary/90',
        tertiary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        secondary:
          'border border-primary bg-background hover:bg-accent text-primary hover:text-accent-foreground',
        active:
          'bg-blue-50/50 border-blue-100 border text-blue-600 dark:bg-blue-900 dark:border-blue-800 dark:text-blue-200 gap-1',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        menu: 'hover:bg-accent/50 hover:text-blue-500 dark:hover:bg-slate-800',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10‚ px-4 py-2',
        xs: 'rounded-sm py-1 px-3',
        sm: 'h-9 rounded-sm px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-14 rounded-md px-10',
        menu: 'h-10 rounded-sm px-2',
        icon: 'h-10 w-10',
      },
      align: {
        default: 'justify-center',
        inlineLeft: 'inline justify-start',
        inlineRight: 'inline  justify-end',
        flexBetween: 'justify-between',
        flexRight: 'justify-end ',
        flexLeft: 'justify-start ',
      },
    },
    defaultVariants: {
      variant: 'default',
      align: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
