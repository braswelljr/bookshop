// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: ['./src/**/*.{js,jsx,ts,tsx,vue,md,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '320px',
      xs: '375px',
      '3xl': '1920px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        brown: {
          900: '#382519',
          800: '#462e20',
          700: '#63412c',
          600: '#7f5439',
          500: '#8d5d3f',
          400: '#9b6646',
          300: '#b37a56',
          200: '#c09072',
          100: '#dcb49d',
          50: '#d9bcab'
        }
      },
      fontFamily: {
        sans: ["'Jetbrains Mono'", ...defaultTheme.fontFamily.sans],
        serif: ["'Mulish'", ...defaultTheme.fontFamily.serif],
        mono: ["'Ubuntu'", ...defaultTheme.fontFamily.mono]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    // direct child selector variant
    function ({ addVariant }) {
      addVariant('children', '& > *')
      addVariant('not-first', '& > *:not(:first-child)')
      addVariant('not-last', '& > *:not(:last-child)')
    }
  ]
}
