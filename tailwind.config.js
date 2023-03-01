/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      select: '0 9px 0px #34D399',
      basic: '0 9px 0px #A7F3D0',
      none: 'none',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#34D399',
          secondary: '#A7F3D0',
          accent: '#FF354B',
          neutral: '#9CA3AF',
        },
      },
    ],
  },
};
