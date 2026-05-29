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
      <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-8 py-14 text-center sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              to="/contact"
              className="bg-white text-brand-700 hover:bg-brand-50"
            >
              Demander une démo
              <ArrowRight className="h-4 w-4" />
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
