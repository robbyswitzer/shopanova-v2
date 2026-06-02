import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F4F0', forest: '#525B46', 'forest-dark': '#3d4435',
        sage: '#7B897C', 'sage-lt': '#C9CBC3', 'near-black': '#1B231B',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
export default config
