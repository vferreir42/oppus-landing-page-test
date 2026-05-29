import { motion } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Upload,
  Building2,
  Users,
  Clock,
  BadgeCheck,
  Sparkles,
} from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import PartnerBanner from '../components/PartnerBanner'
import CtaBand from '../components/CtaBand'
import Marquee from '../components/Marquee'
import Counter from '../components/Counter'
import { documentTypes, keyStats } from '../content'

const features = [
  {
    icon: Zap,
    title: 'Augmentez votre productivité',
    description:
      "Accédez à un large catalogue de modèles et générez vos documents RH en quelques minutes grâce à un éditeur et des formulaires intelligents.",
    accent: 'bg-amber-50 text-amber-600',
    accentHover: 'group-hover:bg-amber-500',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurisez vos documents',
    description:
      "Soyez alerté en temps réel des non-conformités légales et conventionnelles, avec des guides et conseils pour la rédaction de vos clauses.",
    accent: 'bg-emerald-50 text-emerald-600',
    accentHover: 'group-hover:bg-emerald-500',
  },
  {
    icon: Upload,
    title: 'Importez vos propres modèles',
    description:
      "Intégrez vos templates propriétaires et paramétrez vos contrôles de conformité pour exploiter toute la puissance d'Oppus sur vos contenus.",
    accent: 'bg-indigo-50 text-indigo-600',
    accentHover: 'group-hover:bg-indigo-500',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* halos animés */}
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl animate-blob [animation-delay:-4s]" />

        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Gestion documentaire RH
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Passez à la vitesse supérieure,{' '}
              <span className="text-gradient">en toute sécurité</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted"
            >
              Automatisez et sécurisez vos documents RH. Oppus génère vos
              contrats et documents, toujours conformes, en partenariat avec
              Lefebvre Dalloz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button to="/contact">
                Demander une démo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/expert" variant="outline">
                Découvrir nos solutions
              </Button>
            </motion.div>

            <p className="mt-6 text-sm text-ink-muted">
              Propulsé par{' '}
              <span className="font-semibold text-ink-soft">
                Lefebvre Dalloz
              </span>{' '}
              · leader européen de l'édition juridique
            </p>
          </div>

          {/* Capture produit réelle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 to-indigo-200/50 blur-2xl" />
            <img
              src="/assets/feature-1.png"
              alt="Éditeur Oppus : rédaction d'un contrat de travail avec clausier intelligent"
              className="w-full rounded-2xl border border-slate-100 shadow-soft"
            />
            <div className="absolute -bottom-5 -left-4 flex animate-float items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-card">
              <Clock className="h-5 w-5 text-brand-600" />
              <span className="text-sm font-semibold text-ink">
                Généré en 3 min
              </span>
            </div>
            <div className="absolute -right-3 top-6 flex animate-float items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-card [animation-delay:-3s]">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-semibold text-ink">Conforme</span>
            </div>
          </motion.div>
        </div>

        {/* Marquee des types de documents */}
        <div className="container-page pb-10">
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-wide text-ink-muted">
            Tous vos documents RH, prêts à l'emploi
          </p>
          <Marquee items={documentTypes} />
        </div>
      </section>

      {/* Partenariat */}
      <Section className="mt-4">
        <PartnerBanner />
      </Section>

      {/* Fonctionnalités */}
      <Section className="container-page mt-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Fonctionnalités</span>
          <h2 className="section-title mt-4">
            Tout ce qu'il faut pour produire des documents RH fiables
          </h2>
          <p className="section-lead">
            Un seul outil pour gagner du temps, sécuriser vos pratiques et
            garder la main sur vos modèles.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      {/* Statistiques animées */}
      <Section className="container-page mt-20">
        <div className="grid gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-brand-50 via-white to-indigo-50 p-8 sm:grid-cols-3 sm:p-10">
          {keyStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl"
              />
              <div className="mt-2 text-ink-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Conventions collectives */}
      <Section className="container-page mt-20">
        <div className="grid items-center gap-10 rounded-3xl bg-ink p-8 text-white sm:p-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-200">
              <Sparkles className="h-3.5 w-3.5" />
              Conformité
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Plus de 450 conventions collectives à portée de main
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Des synthèses couvrant l'ensemble des thèmes pour garantir la
              conformité de vos documents. L'information pertinente s'affiche
              directement pendant la rédaction.
            </p>
            <Button
              to="/contact"
              className="mt-8 bg-white text-brand-700 hover:bg-brand-50"
            >
              Demander une démo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <img
            src="/assets/benefit-4.png"
            alt="450 conventions collectives couvrant tous les secteurs d'activité"
            loading="lazy"
            className="mx-auto w-full max-w-xs animate-float"
          />
        </div>
      </Section>

      {/* Solutions */}
      <Section className="container-page mt-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Solutions</span>
          <h2 className="section-title mt-4">
            Une solution adaptée à chaque métier
          </h2>
          <p className="section-lead">
            Que vous accompagniez plusieurs clients ou que vous gériez une
            équipe en interne, Oppus s'adapte à votre quotidien.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <SolutionCard
            icon={Building2}
            tag="Pour les experts-comptables"
            title="Oppus Expert"
            description="Développez vos missions sociales, accédez à de multiples conventions collectives et produisez les documents de vos clients en toute sérénité."
            to="/expert"
            cta="Découvrir Oppus Expert"
          />
          <SolutionCard
            icon={Users}
            tag="Pour les services RH"
            title="Oppus RH"
            description="Co-construit avec des DRH : créez, sécurisez et partagez vos contrats et documents RH au sein d'une plateforme unique."
            to="/rh"
            cta="Découvrir Oppus RH"
          />
        </div>
      </Section>

      <CtaBand />
    </>
  )
}

type SolutionCardProps = {
  icon: typeof Building2
  tag: string
  title: string
  description: string
  to: string
  cta: string
}

function SolutionCard({
  icon: Icon,
  tag,
  title,
  description,
  to,
  cta,
}: SolutionCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <span className="mt-5 text-sm font-semibold uppercase tracking-wide text-brand-600">
        {tag}
      </span>
      <h3 className="mt-2 text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{description}</p>
      <Button to={to} variant="ghost" className="mt-6 self-start px-0">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  )
}
