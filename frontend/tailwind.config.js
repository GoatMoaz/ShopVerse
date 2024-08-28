export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      flex: {
        2: "0 0 50%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
    },
    screens: {
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
