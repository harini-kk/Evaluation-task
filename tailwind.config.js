// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        "15px": "15px",
        "40px": "40px"
      },
      borderRadius: {
        '28px': '28px',
        '26px': '26px',
        '20px': '20px'
      },
      colors: {
        primary: '#F95B5B',
        secondary: '#0084D4',
        tertiary: '#F5EBDB',
        gray: '#6D6D6D',
        darkgray: '#3D3D3D',
        error: '#c20000'
      },
    },
  },
  plugins: [],
};