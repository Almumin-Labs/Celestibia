/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8f9ff",
          100: "#f0f3ff",
          300: "#d7dcff",
          500: "#6c4efc",
          700: "#4b2ee6"
        }
      }
    }
  },
  plugins: [],
}
