type LogoProps = {
  className?: string
  variant?: 'dark' | 'light'
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const text = variant === 'light' ? 'text-white' : 'text-ink'
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 shadow-soft">
        <img src="/assets/oppus-o.svg" alt="" aria-hidden="true" className="h-4 w-auto" />
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${text}`}>
        Oppus
      </span>
    </span>
  )
}
