import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const inputClass =
  'mt-1.5 w-full rounded-xl border border-brand-900/10 bg-surface-soft px-4 py-3 text-ink outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Démo : aucune donnée n'est envoyée. À brancher sur un backend / une API.
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Être <span className="text-gradient">recontacté</span>
          </>
        }
        lead="Laissez-nous vos coordonnées : notre équipe vous recontacte rapidement pour organiser une démo personnalisée d'Oppus."
      />

      <Section className="container-page mt-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Formulaire */}
          <div className="rounded-3xl border border-brand-900/5 bg-white p-7 shadow-card sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-green-500" />
                <h2 className="mt-5 text-2xl font-bold text-ink">
                  Merci, votre demande est bien reçue
                </h2>
                <p className="mt-2 max-w-sm text-ink-muted">
                  Notre équipe vous recontacte très prochainement à l'adresse
                  indiquée.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-brand-700 hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-ink-soft"
                    >
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-ink-soft"
                    >
                      Société
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={inputClass}
                      placeholder="Votre cabinet / entreprise"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-ink-soft"
                    >
                      Email professionnel *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder="jean.dupont@societe.fr"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-ink-soft"
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-ink-soft"
                  >
                    Votre besoin
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputClass}
                    placeholder="Décrivez en quelques mots votre contexte et vos attentes."
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-ink-muted">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span>
                    J'accepte que mes données soient traitées par Oppus by
                    Lefebvre Dalloz afin d'être recontacté(e).
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
                >
                  Être recontacté
                </button>
              </form>
            )}
          </div>

          {/* Coordonnées */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-brand-900/5 bg-white p-7 shadow-card">
              <h3 className="text-lg font-bold text-ink">Nos coordonnées</h3>
              <ul className="mt-5 space-y-4 text-ink-soft">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>10 place des Vosges, 92400 Courbevoie</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-600" />
                  <a
                    href="mailto:contact@oppus.fr"
                    className="hover:text-brand-700"
                  >
                    contact@oppus.fr
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand-600" />
                  <span>Sur demande</span>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-brand-night p-7 text-brand-100 shadow-soft">
              <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-50" />
              <p className="relative text-sm leading-relaxed text-brand-100/85">
                Oppus s'associe au leader européen de l'édition juridique pour
                vous proposer un contenu juridique d'excellence.
              </p>
              <p className="relative mt-4 text-lg font-bold tracking-tight text-white">
                Oppus by Lefebvre Dalloz
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
