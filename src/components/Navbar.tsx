import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/expert', label: 'Oppus Expert' },
  { to: '/rh', label: 'Oppus RH' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/5 bg-white/80 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" aria-label="Oppus — accueil" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-700'
                    : 'text-ink-soft hover:text-brand-700'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="https://saas.oppus.fr/login" variant="outline" className="px-5 py-2.5">
            Me connecter
          </Button>
          <Button to="/contact" className="px-5 py-2.5">
            Demander une démo
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl text-ink hover:bg-white md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-900/5 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-soft hover:bg-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button href="https://saas.oppus.fr/login" variant="outline" className="w-full">
                Me connecter
              </Button>
              <Button to="/contact" className="w-full">
                Demander une démo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
