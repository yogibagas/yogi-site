module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0': { transform: 'traslate3d(0,100%,0)' },
          '50%': { transform: 'traslate3d(0,0,0)' },
        },
        fill:{
          '0%': {
            borderRadius:'50%',
            transform:'translateY(150%) translateX(-95%) scale(2)',
          },
          '100%': {
            borderRadius:'50%',
            transform:'scale(2)'
          }
        }
      },
      animation: {
        slideUp: 'slideUp 3s ease-in-out infinite',
        pingNoLoop: 'ping 2s linear',
        fill: 'fill 1s ease-in-out'
      }
    },
    fontFamily: {
      'avenir': ['Avenir, Helvetica, Arial, sans-serif'],
      'montserrat': ['Montserrat, sans-serif'],
      'josefin': ['Josefin Sans', 'sans-serif'],
      'lato': ['Lato', 'sans-serif']
     }
  },
  variants: {
    extend: {

      padding: ['hover', 'focus'],
      border: ['hover','focus'],
    },
  },
  plugins: [],
}
