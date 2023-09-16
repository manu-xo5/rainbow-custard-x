/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: (theme) => ({
        primary: theme.colors.zinc[700],
        secondary: theme.colors.zinc[800],
        border: theme.colors.zinc[500],
        accent: theme.colors.blue[600],
        'text-primary': '#E5E5E5',
      }),
      spacing: {
        sm: '1.5em 2.5em',
        md: '2.5em 3.5em',
      },
      borderRadius: {
        sm: '5px',
      },
      borderColor: (theme) => ({
        DEFAULT: theme('colors.border'),
      }),
      lineHeight: {
        19: '76px',
      },
      width: {
        6.5: '1.625rem',
        19: '76px',
      },
      fontSize: {
        title: ['1.25rem', { lineHeight: '1.3em' }],
        sm: ['0.875rem', { lineHeight: '1.2em' }],
        base: ['14px', { lineHeight: '1.285em' }],
        icon: ['44px', '44px'],
      },
    },
  },
  plugins: [],
}
