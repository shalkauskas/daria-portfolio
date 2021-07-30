module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    cursor: {
      "zoom-in": "zoom-in",
    },
    extend: {
      width: {
        51: "55%",
      },
    },
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "4/6": "60%",
      90: "90%",
      full: "100%",
    },
  },
};
