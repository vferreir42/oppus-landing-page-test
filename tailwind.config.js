/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bleu de marque réel d'Oppus, ancré sur #2567A4 (rgb 37,103,164) en brand-600.
        brand: {
          50: '#eef5fb',
          100: '#d6e6f3',
          200: '#aecde7',
          300: '#7eaed6',
          400: '#4d8bc0',
          500: '#2f76b4',
          600: '#2567a4',
          700: '#1f5587',
          800: '#1d476e',
          900: '#1b3a59',
          950: '#11263b',
        },
        // Accents repris de l'application (badges, succès, énergie).
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#ea8a04',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#22c55e',
          600: '#16a34a',
        },
        // Canvas clair légèrement teinté (façon dashboard) plutôt que blanc pur.
        surface: {
          DEFAULT: '#f6f8fb',
          soft: '#fbfcfe',
        },
        ink: {
          DEFAULT: '#0f1f33',
          soft: '#34465c',
          muted: '#6b7c92',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Ombres douces, diffuses et teintées bleu pour matcher les cartes de l'app.
        soft: '0 24px 60px -24px rgba(37, 103, 164, 0.35)',
        card: '0 12px 32px -16px rgba(27, 58, 89, 0.18)',
        'card-hover': '0 28px 56px -24px rgba(37, 103, 164, 0.28)',
        glow: '0 0 0 1px rgba(37, 103, 164, 0.06), 0 18px 48px -20px rgba(37, 103, 164, 0.40)',
      },
      backgroundImage: {
        'mesh-brand':
          'radial-gradient(48% 60% at 18% 18%, rgba(37,103,164,0.18) 0%, rgba(37,103,164,0) 60%), radial-gradient(42% 52% at 82% 8%, rgba(125,174,214,0.22) 0%, rgba(125,174,214,0) 58%), radial-gradient(50% 60% at 60% 100%, rgba(245,158,11,0.10) 0%, rgba(245,158,11,0) 60%)',
        'brand-night':
          'linear-gradient(160deg, #1f5587 0%, #1b3a59 55%, #11263b 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        marquee: 'marquee 36s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
