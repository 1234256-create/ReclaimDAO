/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fcb420',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        navy: {
          highlight: '#3772ff',
          mid: '#131254',
          deep: '#0d0c43',
          abyss: '#0a0936',
          card: '#131254',
          surface: '#181663',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        rockettta: {
          bg: '#0d0c43',
          'bg-dark': '#0a0936',
          'bg-card': '#131254',
          'bg-surface': '#181663',
          gold: '#fcb420',
          'gold-light': '#fcd34d',
          'gold-dark': '#d97706',
          'gold-accent': '#FCB42D',
          blue: '#3772ff',
          'blue-light': '#4886d9',
          'blue-dark': '#225bcc',
          green: '#2db47f',
          red: '#ec4e70',
          text: '#ffffff',
          'text-muted': '#cacdd1',
          'text-dim': '#acacac',
        },
        gradient: {
          start: '#0a0936',
          middle: '#0d0c43',
          end: '#131254'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, #0a0936 0%, #0d0c43 80%, #0d0c43 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(19, 18, 84, 0.9) 0%, rgba(13, 12, 67, 0.95) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #fcb420 0%, #ffd066 50%, #f59e0b 100%)',
        'blue-gradient': 'linear-gradient(135deg, #3772ff 0%, #4886d9 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        }
      }
    },
  },
  plugins: [],
}