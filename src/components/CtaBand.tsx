import { ArrowRight } from 'lucide-react'
import Section from './Section'
import Button from './Button'

type CtaBandProps = {
  title?: string
  subtitle?: string
}

export default function CtaBand({
  title = 'Passez à la vitesse supérieure, en toute sécurité',
  subtitle = 'Découvrez comment Oppus simplifie la création de vos documents RH. Réservez une démo personnalisée avec notre équipe.',
}: CtaBandProps) {
  return (
    <Section className="container-page mt-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-night px-8 py-14 text-center shadow-soft sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-60" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-100/90">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              to="/contact"
              className="bg-white text-brand-700 shadow-none hover:bg-brand-50"
            >
              Demander une démo
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
            <Button
              href="mailto:contact@oppus.fr"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              contact@oppus.fr
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
