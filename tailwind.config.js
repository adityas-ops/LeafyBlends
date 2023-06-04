/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Primary': '#282828',
        'On-Primary':'#FFFFFF',
        'Secondary':'#C3B212',
        'On-Secondary':'#000000',
        'Background':'#FEFEFE',
        'BackgroundVariant': '#F4F4F4',
        'Outline':'#A0A0A0',
      },
      screens:{
        'mobile':'540px',
        'tablet':'768px',
        'laptop':'1024px',
        'desktop':'1280px',
      },
      fontFamily:{
        'Prosto':['Prosto One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
