import { Check } from 'lucide-react'

type FeatureTableProps = {
  features: string[]
}

export default function FeatureTable({ features }: FeatureTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-brand-900/5 bg-white shadow-card">
      <ul className="grid sm:grid-cols-2">
        {features.map((feature, index) => (
          <li
            key={feature}
            className={`flex items-center gap-3 px-6 py-4 transition-colors hover:bg-brand-50/50 ${
              index % 2 === 0 ? 'sm:border-r border-brand-900/5' : ''
            } border-b border-brand-900/5`}
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success-50 text-success-600">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <span className="text-ink-soft">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
