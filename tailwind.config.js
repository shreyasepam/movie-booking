/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
        plugin(function({ addUtilities }) {
          addUtilities({
            '.inset-inline-start-auto': {
              'inset-inline-start': 'auto',
            },
            // Add more utilities as needed
          });
        })
      ],
  }