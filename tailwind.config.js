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
          primary: '#B9DDD9',
          secondary: '#24504B',
          accent: '#D9537C',
          'accent-focus': '#CB0E4F',
          neutral: '#9CA3AF',
          'base-100': '#EBFAF8',
        },
      },
    ],
  },
};
