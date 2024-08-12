/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '319px',
      sm: '520px',
      md: '767px',
      lg: '1230px'
    },
    extend: {
      borderRadius: {
        btn: '3px',
        input: '4px',
        card: '4px'
      },
      padding: {
        input: '15px',
        base: '30px'
      },
      colors: {
        'pale-grey': '#F6F9FC',
        'menu-border-grey': '#D4D8E1',
        'meta-grey': '#8E97A6',
        'overlay-blue': '#1F2844',
        'placeholder-grey': '##B4B9C4',
        'heading-grey': '#43516B',
        'brand-purple': '#6b4db8',
        'hover-purple': '#f2edff',
        'menu-active-purple': '#7344C0',
        'ui-green': '#2DC26A',
        'ui-dark-green': '#2DC26A',
        'brand-dark-purple': '#592F9D'
      },
      boxShadow: {
        input: '0 0 0 3px rgba(45,194,106,0.15)',
        dropdown: '0px 2px 6px rgba(228, 229, 231, 1)'
      },
      fontSize: {
        '4xl': '30px'
      }
    }
  },
  plugins: []
}
