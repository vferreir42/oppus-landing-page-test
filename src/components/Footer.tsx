import { Link } from 'react-router-dom'
import { Linkedin, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-slate-100 bg-slate-50">
      <div className="container-page grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs leading-relaxed text-ink-muted">
            Automatisez et sécurisez la création de vos documents RH, en
            partenariat avec Lefebvre Dalloz.
          </p>
          <p className="mt-4 text-sm font-medium text-ink-soft">
            Oppus by Lefebvre Dalloz
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink">
            Solutions
          </h4>
          <ul className="mt-4 space-y-3 text-ink-muted">
            <li>
              <Link to="/expert" className="hover:text-brand-700">
                Oppus Expert
              </Link>
            </li>
            <li>
              <Link to="/rh" className="hover:text-brand-700">
                Oppus RH
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-700">
                Demander une démo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-ink-muted">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span>10 place des Vosges, 92400 Courbevoie</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 shrink-0 text-brand-600" />
              <a href="mailto:contact@oppus.fr" className="hover:text-brand-700">
                contact@oppus.fr
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-5 w-5 shrink-0 text-brand-600" />
              <a
                href="https://www.linkedin.com/company/oppus"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-700"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Oppus. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-700">
              Mentions légales
            </a>
            <a href="#" className="hover:text-brand-700">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
