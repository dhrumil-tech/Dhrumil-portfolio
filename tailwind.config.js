/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#dceaff",
          200: "#b8d4ff",
          300: "#93bdff",
          400: "#6fa7ff",
          500: "#4b90ff",   // primary professional blue
          600: "#2c6fe6",
          700: "#1f55b4",
          800: "#173f85",
          900: "#0f2a57"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)"
      }
    },
  },
  plugins: [],
}
