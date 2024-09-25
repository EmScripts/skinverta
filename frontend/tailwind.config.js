/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#A8BEB0', // Sage Green
        secondary: '#E2725B', // Terracotta
        darkGrey: '#333333',
        lightGrey: '#EFEFEF',
        warning: '#f59e0b', // Yellow
        error: '#ef4444', // Red
        success: '#10b981', // Green
        info: '#3b82f6', // Blue
        accent: '#d4a373', // Accent yellow color
      },
      fontFamily: {
        heading: ['Ivy Mode', 'sans-serif'],
        body: ['Aileron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

