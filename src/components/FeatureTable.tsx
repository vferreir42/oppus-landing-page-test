import { Check } from 'lucide-react'

type FeatureTableProps = {
  features: string[]
}

export default function FeatureTable({ features }: FeatureTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
      <ul className="grid sm:grid-cols-2">
        {features.map((feature, index) => (
          <li
            key={feature}
            className={`flex items-center gap-3 px-6 py-4 ${
              index % 2 === 0 ? 'sm:border-r border-slate-100' : ''
            } border-b border-slate-100`}
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <span className="text-ink-soft">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
