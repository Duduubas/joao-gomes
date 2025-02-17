// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 10px 20px rgba(0,0,0,0.1)',
        'custom-lg': '0 10px 20px rgba(0,0,0,0.1)',
      },
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': { fontWeight: 'bold' },
      })
    }
  ],
}

export default config