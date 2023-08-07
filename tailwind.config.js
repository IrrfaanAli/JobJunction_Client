/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hero: 'rgb(242, 250, 247)',
      }
    },
  },
  plugins: [require("daisyui")],
}

