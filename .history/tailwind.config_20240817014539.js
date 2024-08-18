/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
extend: {
  fontFamily: {
    "Poppins": 'font-family: "Poppins", sans-serif;',
  },
},
},
plugins: [daisyui],
daisyui: { themes: ["light"] },
};
