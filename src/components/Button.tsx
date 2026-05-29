import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:-translate-y-0.5',
  outline:
    'border border-brand-200 bg-white text-brand-700 hover:border-brand-400 hover:bg-brand-50',
  ghost: 'text-brand-700 hover:bg-brand-50',
}

type ButtonProps = {
  to?: string
  href?: string
  variant?: Variant
  children: ReactNode
  className?: string
}

export default function Button({
  to,
  href,
  variant = 'primary',
  children,
  className = '',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return <span className={classes}>{children}</span>
}
