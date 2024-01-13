/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': {'min':'0px','max':'445px'},
      'sm': {'max':"770px"},
      'md': '771px',
    },
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Nunito Sans",
      },
    },
  },
  plugins: [],
};
