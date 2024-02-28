/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        regal: '#5A37D1',
        input: '#6E45F1',
      }
    },
  },
  plugins: [],
}