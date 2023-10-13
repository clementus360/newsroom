/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'Primary': '#AA0E00',
        'Secondary': '#1D3244',
        'Dark': '#1A1A1A'
      }
    },
  },

  plugins: []
};

module.exports = config;