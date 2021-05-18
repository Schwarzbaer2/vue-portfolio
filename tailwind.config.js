module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainRed: "#f0544f",
        mainBlue: "#114b5f",
        mainText: "#e4fde1"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
