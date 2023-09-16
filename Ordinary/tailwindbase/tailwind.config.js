// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: [
    './public/**/*.html',
    './src/**/*.js',
    // Add more file paths as needed for CSS purging.
  ],
  darkMode: false,
  theme: {
    extend: {
      // Add custom styles, colors, typography, etc.
    },
  },
  variants: {},
  plugins: [],
}
