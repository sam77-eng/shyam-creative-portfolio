/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050507',
          secondary: '#0B0B12',
          surface: '#11111A',
          card: 'rgba(17, 17, 26, 0.75)',
          elevated: '#171726'
        },
        accent: {
          purple: '#8B5CF6',
          violet: '#A855F7',
          indigo: '#6366F1',
          cyan: '#06B6D4',
        },
        text: {
          main: '#F5F5F7',
          muted: '#A3A3B5',
          dark: '#62627A'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif']
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
        'glow-violet': '0 0 35px -5px rgba(168, 85, 247, 0.55)',
        'glow-subtle': '0 0 15px 0 rgba(139, 92, 246, 0.15)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
