import { FileText } from 'lucide-react'

type MarqueeProps = {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  // On duplique la liste pour un défilement continu et sans rupture.
  const loop = [...items, ...items]

  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className="flex w-max animate-marquee gap-3">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-brand-900/5 bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-card"
          >
            <FileText className="h-4 w-4 text-brand-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
