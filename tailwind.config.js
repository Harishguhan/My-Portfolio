module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",

      sm: "440px",

      mmd: "425px",

      md: "650px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    colors: {
      'grey': '#bfbfbf',
      'primary':'#35a5ab',
      'form-bg':'#EFEFEF'
    },
  },
  plugins: [require("flowbite/plugin")],
};
