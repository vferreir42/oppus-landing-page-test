import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  lead: string
  children?: ReactNode
  image?: string
  imageAlt?: string
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  image,
  imageAlt = '',
}: PageHeroProps) {
  const text = (
    <div>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
      >
        {lead}
      </motion.p>
      {children && <div className="mt-8">{children}</div>}
    </div>
  )

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-brand-300/25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl animate-blob [animation-delay:-5s]" />

      {image ? (
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          {text}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <img
              src={image}
              alt={imageAlt}
              className="mx-auto w-full max-w-md"
            />
          </motion.div>
        </div>
      ) : (
        <div className="container-page py-20 lg:py-24">{text}</div>
      )}
    </section>
  )
}
