/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#030617',
          navy: '#111633',
          royal: '#2F2B80',
        },
        accent: {
          blue: '#5F6CFF',
          violet: '#C65CF5',
          teal: '#25D0C8',
          magenta: '#FF2E93',
        },
        neutral: {
          white: '#F4F6FF',
          lightGray: '#080C1F',
          gray: '#111832',
          mediumGray: '#1E2444',
          darkGray: '#2F365B',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E0E6FF',
          light: '#B7C3FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 50px rgba(8, 12, 31, 0.45)',
        floating: '0 35px 80px rgba(9, 11, 30, 0.65)',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        section: '5rem',
        card: '2rem',
      },
    },
  },
  plugins: [],
}



