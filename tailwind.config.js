/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0E1A',
          card: '#111827',
          border: '#1F2937',
        },
        primary: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        accent: {
          teal: '#14B8A6',
          purple: '#A855F7',
          pink: '#EC4899',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(59, 130, 246, 0.15)',
      }
    },
  },
  plugins: [],
}

