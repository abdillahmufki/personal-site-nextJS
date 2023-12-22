/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#427D9D',
          90: '#6690A6',
          95: '#526D82',
        },
        gray: {
          10: '#B6BBC4',
          20: '#6A6D7C',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        yellow: {
          50: '#FEC601',
        },
        while: {
          50: '#f9fafb',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/blob.svg')",
        'bg-img-2': "url('/backgrounds/bg2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
