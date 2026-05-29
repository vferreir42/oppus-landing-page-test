import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ImageRowProps = {
  eyebrow: string
  title: string
  children: ReactNode
  image: string
  imageAlt: string
  reverse?: boolean
  /** Couleur du halo décoratif derrière l'image (classe de dégradé Tailwind). */
  glow?: string
}

export default function ImageRow({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  glow = 'from-brand-200/60 to-indigo-200/50',
}: ImageRowProps) {
  return (
    <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={reverse ? 'lg:order-2' : ''}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h3>
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-muted">
          {children}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`relative ${reverse ? 'lg:order-1' : ''}`}
      >
        <div
          className={`pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br ${glow} blur-2xl`}
        />
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="mx-auto w-full max-w-md rounded-2xl"
        />
      </motion.div>
    </div>
  )
}
