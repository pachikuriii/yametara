/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      md: '0 9px 0px rgba(184,232,220,1)',
      none: 'none',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffffff',
          secondary: '#B8E8DC',
          accent: '#FF354B',
        },
      },
    ],
  },
};
