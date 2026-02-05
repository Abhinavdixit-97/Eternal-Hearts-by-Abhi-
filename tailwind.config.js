/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2D2D2D',
        'rose-gold': '#E8B4B8',
        'rose-gold-light': '#F4D1D4',
        'glow': '#FFB6C1'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'signature': ['Great Vibes', 'Dancing Script', 'cursive']
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(40) 1s forwards'
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}