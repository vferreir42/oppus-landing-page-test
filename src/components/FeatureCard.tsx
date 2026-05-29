import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  /** Classes de couleur de l'icône au repos, ex. "bg-accent-50 text-accent-600". */
  accent?: string
  /** Classe de fond de l'icône au survol, ex. "group-hover:bg-accent-500". */
  accentHover?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = 'bg-brand-50 text-brand-600',
  accentHover = 'group-hover:bg-brand-600',
}: FeatureCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-900/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div
          className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 group-hover:text-white ${accent} ${accentHover}`}
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  )
}
