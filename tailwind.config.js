/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      md: '0 9px 0px rgba(89, 197, 139, 1)',
      none: 'none',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#E5F8F4',
          secondary: '#59C58B',
          accent: '#FF354B',
        },
      },
    ],
  },
};
