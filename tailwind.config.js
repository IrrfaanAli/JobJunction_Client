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
        hero2: 'rgb(248, 250, 252)',
      }
    },
  },
  plugins: [require("daisyui")],
}

