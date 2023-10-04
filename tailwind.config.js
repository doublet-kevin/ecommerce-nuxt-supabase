/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      maxWidth: {
        'custom': '1500px',
      },
      fontSize: {
        '2xs': ['10px', '12px'],
      },
      colors: {
        'main': '#e3e6e6',
        'nav': '#131921',
        'yellow': '#ffab00',
        'orange': '#FF9900',
        'light-grey': '#e6e6e6',
        'banner': '#232f3f'
      }
    },
  },
  plugins: [],
}

