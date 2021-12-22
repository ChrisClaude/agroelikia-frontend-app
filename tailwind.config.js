module.exports = {
  important: true,
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/app/**/*.{html,ts,scss}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        primary: '#059669'
      },
      minWidth: {
        '0': '0',
        '80': '20rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      gridTemplateColumns: {

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
