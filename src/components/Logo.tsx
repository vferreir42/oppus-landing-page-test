type LogoProps = {
  className?: string
  variant?: 'dark' | 'light'
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const text = variant === 'light' ? 'text-white' : 'text-ink'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-[0_8px_20px_-8px_rgba(37,103,164,0.7)] ring-1 ring-white/20">
        <img
          src="/assets/oppus-o.svg"
          alt=""
          aria-hidden="true"
          className="h-4 w-auto"
        />
      </span>
      <span className={`text-xl font-bold tracking-tight ${text}`}>Oppus</span>
    </span>
  )
}
