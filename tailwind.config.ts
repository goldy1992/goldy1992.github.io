import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          primary: {
            light: '#005fb0',
            DEFAULT: '#005fb0',
            dark: '#a6c8ff',
          },
          onPrimary: {
            light: '#ffffff',
            DEFAULT: '#ffffff',
            dark: '#00315f',
          },
          primaryContainer: {
            light: '#d5e3ff',
            DEFAULT: '#d5e3ff',
            dark: '#004787',
          },
          onPrimaryContainer: {
            light: '#001c3b',
            DEFAULT: '#001c3b',
            dark: '#d5e3ff',
          },

          secondary: {
            light: '#666000',
            DEFAULT: '#666000',
            dark: '#d4ca38',
          },
          onSecondary: {
            light: '#ffffff',
            DEFAULT: '#ffffff',
            dark: '#353200',
          },
          secondaryContainer: {
            light: '#f1e753',
            DEFAULT: '#f1e753',
            dark: '#4d4800',
          },
          onSecondaryContainer: {
            light: '#1e1c00',
            DEFAULT: '#1e1c00',
            dark: '#f1e753',
          },

          tertiary: {
            light: '#3f55bc',
            DEFAULT: '#3f55bc',
            dark: '#b9c3ff',
          },
          onTertiary: {
            light: '#ffffff',
            DEFAULT: '#ffffff',
            dark: '#00218c',
          },
          tertiaryContainer: {
            light: '#dee1ff',
            DEFAULT: '#dee1ff',
            dark: '#243ca3',
          },
          onTertiaryContainer: {
            light: '#001258',
            DEFAULT: '#001258',
            dark: '#dee1ff',
          },

          error: {
            light: '#ba1a1a',
            DEFAULT: '#ba1a1a',
            dark: '#ffb4ab',
          },
          onError: {
            light: '#ffffff',
            DEFAULT: '#ffffff',
            dark: '#690005',
          },
          errorContainer: {
            light: '#ffdad6',
            DEFAULT: '#ffdad6',
            dark: '#93000a',
          },
          onErrorContainer: {
            light: '#410002',
            DEFAULT: '#410002',
            dark: '#ffdad6',
          },

          background: {
            light: '#fdfbff',
            DEFAULT: '#fdfbff',
            dark: '#1a1c1e',
          },
          onBackground: {
            light: '#1a1c1e',
            DEFAULT: '#1a1c1e',
            dark: '#e3e2e6',
          },
          surface: {
            light: '#fdfbff',
            DEFAULT: '#fdfbff',
            dark: '#1a1c1e',
          },
          onSurface: {
            light: '#1a1c1e',
            DEFAULT: '#1a1c1e',
            dark: '#e3e2e6',
          },

          outline: {
            light: '#74777f',
            DEFAULT: '#74777f',
            dark: '#8d9199',
          },
          surfaceVariant: {
            light: '#e0e2ec',
            DEFAULT: '#e0e2ec',
            dark: '#43474e',
          },
          onSurfaceVariant: {
            light: '#43474e',
            DEFAULT: '#43474e',
            dark: '#c4c6cf',
          },
        }
    }
  }
      //extend: {
        // backgroundImage: {
        //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        //   'gradient-conic':
        //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // },
    // },
  ,
  plugins: [],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
}
export default config

