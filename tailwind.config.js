/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        300: '18.75rem',
        500: '31.25rem',
      },
    },
  },
  plugins: [],
};
