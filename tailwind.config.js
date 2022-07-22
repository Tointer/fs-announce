/* eslint-disable global-require */
module.exports = {
  content: [
    "node_modules/@zach.codes/react-calendar/dist/**/*.js",
    "node_modules/@headlessui/react/dist/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        bazaar: {
          primary: "#f92247",

          secondary: "#333",

          accent: "#37CDBE",

          neutral: "#F85150",
          "neutral-focus": "#34415C",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
