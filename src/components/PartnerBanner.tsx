export default function PartnerBanner() {
  return (
    <div className="container-page">
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-brand-900/5 bg-white px-6 py-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
        <p className="max-w-xl text-ink-soft">
          Oppus s'associe au leader européen de l'édition juridique pour vous
          proposer un{' '}
          <span className="font-semibold text-ink">
            contenu juridique d'excellence
          </span>{' '}
          : Éditions Législatives et Éditions Francis Lefebvre.
        </p>
        <div className="flex shrink-0 items-center gap-4 rounded-2xl bg-surface px-5 py-3 ring-1 ring-brand-900/5">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
            Propulsé par
          </span>
          <img
            src="/assets/lefebvre-dalloz-logo.png"
            alt="Oppus by Lefebvre Dalloz"
            className="h-8 w-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
