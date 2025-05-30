/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rebel-orange': '#F94D1B',
        'geek-blue': '#3661B4',
        'elder-scrolls': '#F5F3E7',
        'earth': '#7D4921',
        'black': '#1E1E1E',
        primary: '#F94D1B',
        secondary: '#3661B4',
        accent: '#F5F3E7',
        tertiary: '#7D4921',
        dark: '#1E1E1E',
      },
      fontFamily: {
        sans: ['var(--font-rubik)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 