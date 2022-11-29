/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main-light-primary": '#fff',
        "main-light-secondary": '#F4F6F5',
        "btn-light-primary": '#fff',
        "btn-light-secondary": '#000',
      },
      textColor: {
        "btn-light-primary": '#000',
        "btn-light-secondary": '#fff',
      }
    },
  },
  plugins: [],
}
