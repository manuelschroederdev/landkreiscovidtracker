module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          "50": "#fef6e6",
          "100": "#fef1d7",
          "200": "#fddea1",
          "300": "#fabf47",
          "400": "#ea9e06",
          "500": "#bd8005",
          "600": "#956504",
          "700": "#775103",
          "800": "#5e4002",
          "900": "#5a3c02",
        },
        green: {
          "50": "#f4f8ec",
          "100": "#eef4e1",
          "200": "#dae8bf",
          "300": "#b9d586",
          "400": "#92bd42",
          "500": "#789b36",
          "600": "#5d792a",
          "700": "#495e21",
          "800": "#3d4f1c",
          "900": "#374819",
        },
        purple: {
          "50": "#f9f6f8",
          "100": "#f5f0f4",
          "200": "#eae1e9",
          "300": "#d5c3d3",
          "400": "#c0a5bd",
          "500": "#a781a2",
          "600": "#8d6288",
          "700": "#6c4b68",
          "800": "#5a3f57",
          "900": "#543b51",
        },
        red: {
          "50": "#fcf4f2",
          "100": "#fcf0ee",
          "200": "#f7ddd9",
          "300": "#f0bcb2",
          "400": "#e79688",
          "500": "#dd6955",
          "600": "#c84028",
          "700": "#99311e",
          "800": "#802919",
          "900": "#772618",
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};