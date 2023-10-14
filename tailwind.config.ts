import type { Config } from 'tailwindcss'

//const colors = require('material-ui-colors')
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 // important: 'true',
  theme: {
    //extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
   // },
  },
  plugins: [],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
}
export default config

