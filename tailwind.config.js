/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transition1: "0.5s ease-in-out",
      maxWidth: {
        'mxCInfo': "calc(100% - 46px)",
      }
    },
  },
  plugins: [],
}
