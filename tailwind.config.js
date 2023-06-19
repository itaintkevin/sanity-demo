/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E20',
        'secondary': '#D9D9D9',
        'accent-1': '#32FFAA',
        'accent-2': '#FFE86E',
      },
    },
  },
  plugins: [],
}
