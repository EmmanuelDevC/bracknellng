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
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0,0,.2,1) infinite',
      },

      colors: {
        'bluish-gray': {
          500: '#6B7280', // Mid-tone bluish gray
        },

        customBlueGray: '#7B88A8',
      },

      screens: {
        sm: '350px', // Small screens
        md: '630px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
        '2xl': '1536px', // 2x extra large screens
      },

    },
  },
  plugins: [],
}


//   /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
//   darkMode: 'media',              // or ‘class’ if you want manual toggle
//   theme: {
//     extend: {
//       colors: ({ theme }) => ({
//         brand: {
//           50:  '#f7fee7',
//           100: '#ecfccb',
//           200: '#d9f99d',
//           300: '#bef264',
//           400: '#a3e635',
//           500: '#84cc16',   // your old “lime-600”
//           600: '#65a30d',
//           700: '#4d7c0f',
//           800: '#365314',
//           900: '#1a2e05',
//         },
//       }),
//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif'],
//       },
//       animation: {
//         'ping-slow': 'ping 2s cubic-bezier(0,0,.2,1) infinite',
//       },
//     },
//   },
//   plugins: [],
// };


