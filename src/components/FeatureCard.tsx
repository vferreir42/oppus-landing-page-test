import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  /** Classes de couleur de l'icône au repos, ex. "bg-indigo-50 text-indigo-600". */
  accent?: string
  /** Classe de fond de l'icône au survol, ex. "group-hover:bg-indigo-600". */
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
    <div className="group relative h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft">
      <div
        className={`grid h-12 w-12 place-items-center rounded-xl transition-colors group-hover:text-white ${accent} ${accentHover}`}
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink-muted">{description}</p>
    </div>
  )
}
