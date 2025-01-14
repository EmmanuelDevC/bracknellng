/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Add 'DM Sans'
        itim: ['Itim', 'cursive'],     // Add 'Itim'
      },

      colors: {
        'bluish-gray': {
          500: '#6B7280', // Mid-tone bluish gray
        },
        customBlueGray: '#7B88A8',
      },

      screens: {
        sm: '350px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
        '2xl': '1536px', // 2x extra large screens
      },

    },
  },
  plugins: [],
}

