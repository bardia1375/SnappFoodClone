module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'radial-gradient(100% 303.06% at 0% 0%, #f69 0%, #e02291 100%)',
        secondary: '#9333EA', // custom purple
        customGray: '#f7f7f7',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'xs': '475px',
        'md':"760px",
        'xl': '968px',
        '2xl': '1200px',
        '3xl': '1600px',
      },
    },
  },
  darkMode: 'class',
}
