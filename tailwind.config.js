/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', '"Poppins"', '"Quicksand"', "system-ui", "sans-serif"],
      },
      colors: {
        blush: {
          50: "#fff5f7",
          100: "#ffe4ec",
          200: "#ffc2d3",
          300: "#ff9ab8",
          400: "#ff6b96",
          500: "#f53c79",
        },
        mint: {
          50: "#f3fbf7",
          100: "#d4f5e3",
          200: "#a5e8c6",
          300: "#75d9aa",
          400: "#45c88f",
          500: "#24b176",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        card: "1.75rem",
      },
    },
  },
  plugins: [],
}

