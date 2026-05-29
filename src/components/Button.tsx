import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost' | 'accent'

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0',
  accent:
    'bg-accent-500 text-white shadow-[0_18px_40px_-18px_rgba(245,158,11,0.7)] hover:bg-accent-600 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-brand-200 bg-white/70 text-brand-700 backdrop-blur hover:border-brand-400 hover:bg-white hover:-translate-y-0.5',
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
