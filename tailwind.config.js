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
        '2xs': ['16px', '17px'],
      },
      colors: {
        'main': '#e3e6e6',
        'nav': '#131921',
        'yellow': '#ffab00',
        'orange': '#FF9900',
        'light-grey': '#e6e6e6',
        'light-grey-02': '#fafafa',
        'light-grey-03': '#f5f5f5',
        'banner': '#232f3f'
      }
    },
  },
  plugins: [],
}

