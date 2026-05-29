import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import ImageRow from '../components/ImageRow'
import CtaBand from '../components/CtaBand'
import Marquee from '../components/Marquee'
import FeatureTable from '../components/FeatureTable'
import { documentTypes, expertFeatures } from '../content'

export default function Expert() {
  return (
    <>
      <PageHero
        eyebrow="Experts-Comptables"
        title={
          <>
            Développez vos <span className="text-gradient">missions sociales</span>
          </>
        }
        lead="Oppus vous assiste dans la rédaction de documents RH dans le cadre de vos missions sociales. Sécurisez et industrialisez la production documentaire de tous vos clients."
        image="/assets/presentation-expert.png"
        imageAlt="Experts-comptables en réunion utilisant Oppus Expert"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/contact">
            Demander une démo
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to="/rh" variant="outline">
            Voir aussi Oppus RH
          </Button>
        </div>
      </PageHero>

      {/* Marquee des documents */}
      <div className="container-page">
        <Marquee items={documentTypes} />
      </div>

      {/* Modèles des éditeurs */}
      <Section className="mt-20">
        <ImageRow
          eyebrow="Catalogue de modèles"
          title="Retrouvez les modèles de documents de vos éditeurs favoris"
          image="/assets/benefit-1.png"
          imageAlt="Modèles des Éditions Législatives et Éditions Francis Lefebvre"
          glow="from-accent-100/60 to-brand-100/40"
          reverse
        >
          <p>
            Oppus Expert contient un large choix de modèles de documents des
            leaders français de l'édition juridique :{' '}
            <span className="font-semibold text-ink">Éditions Législatives</span>{' '}
            et{' '}
            <span className="font-semibold text-ink">
              Éditions Francis Lefebvre
            </span>
            .
          </p>
          <p>
            Nos modèles sont régulièrement mis à jour pour prendre en compte les
            évolutions réglementaires.
          </p>
        </ImageRow>
      </Section>

      {/* Gestion clients */}
      <Section className="mt-24">
        <ImageRow
          eyebrow="Organisation"
          title="Gérez et organisez facilement vos clients, leurs salariés et leurs documents"
          image="/assets/benefit-2.png"
          imageAlt="Profils des salariés et partage de documents dans Oppus"
          glow="from-brand-200/60 to-brand-100/40"
        >
          <p>
            Créez des profils pour les salariés de vos clients afin
            d'enregistrer leurs informations et ne plus les répéter inutilement.
          </p>
          <p>
            Partagez des fichiers directement avec vos clients grâce à un espace
            de stockage en ligne dédié.
          </p>
        </ImageRow>
      </Section>

      {/* Éditeur professionnel */}
      <Section className="mt-24">
        <ImageRow
          eyebrow="Éditeur intelligent"
          title="Profitez d'un éditeur pensé pour les professionnels"
          image="/assets/feature-3.png"
          imageAlt="Éditeur Oppus avec formulaires intelligents"
          glow="from-brand-200/60 to-brand-100/40"
          reverse
        >
          <p>
            Remplissez simplement vos modèles grâce à notre éditeur et ses
            formulaires intelligents. Fini les coquilles et les erreurs.
          </p>
          <p>
            Nos algorithmes vérifient automatiquement la cohérence des champs du
            document.
          </p>
        </ImageRow>
      </Section>

      {/* Conventions collectives — section sombre immersive */}
      <Section className="container-page mt-24">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] bg-brand-night p-8 text-white shadow-soft sm:p-12 lg:grid-cols-2">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-50" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-100 ring-1 ring-white/15">
              Conformité
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Retrouvez toutes les conventions collectives de vos clients
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100/85">
              Plus de 450 synthèses de conventions collectives couvrant
              l'ensemble des thèmes pour vous assurer de la conformité de vos
              documents. Accédez facilement à l'information pertinente en cours
              de rédaction.
            </p>
          </div>
          <img
            src="/assets/benefit-4.png"
            alt="450 conventions collectives couvrant tous les secteurs"
            loading="lazy"
            className="relative mx-auto w-full max-w-xs animate-float"
          />
        </div>
      </Section>

      {/* Échéances */}
      <Section className="mt-24">
        <ImageRow
          eyebrow="Suivi"
          title="Ne ratez plus une seule échéance"
          image="/assets/benefit-5.png"
          imageAlt="Alerte d'échéance dans le calendrier Oppus"
          glow="from-accent-100/60 to-brand-100/40"
        >
          <p>
            Soyez alertés automatiquement des échéances principales de vos
            documents.
          </p>
          <p>
            Paramétrez la notification automatique de vos clients sur les
            principales échéances concernant les documents que vous avez rédigés
            pour eux.
          </p>
        </ImageRow>
      </Section>

      {/* Tableau de fonctionnalités */}
      <Section className="container-page mt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Tout est inclus</span>
          <h2 className="section-title mt-4">
            Les fonctionnalités d'Oppus Expert
          </h2>
        </div>
        <div className="mt-10">
          <FeatureTable features={expertFeatures} />
        </div>
      </Section>

      <CtaBand
        title="Prêt à développer vos missions sociales ?"
        subtitle="Laissez-nous votre contact et nos équipes reviennent vers vous dans les plus brefs délais pour programmer une démonstration."
      />
    </>
  )
}
