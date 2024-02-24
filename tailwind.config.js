module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          300: "#94a2b3",
          400: "#868686",
          900: "#272d4e",
          "200_7f": "#a1adc07f",
        },
        light_green: { A700: "#70c217" },
        light_blue: { 400: "#28aaf3" },
        red: { 400: "#ef4358" },
        black: { 900: "#000000" },
        deep_purple: {
          A400: "#5f36ef",
          A100: "#9a7dff",
          A200: "#7854f7",
          A200_01: "#8161f7",
        },
        blue: {
          50: "#e5efff",
          500: "#289ef3",
          "50_01": "#ecf0fd",
          "50_00_01": "#ecf0fd00",
          "50_42": "#e5efff42",
          "50_00": "#e5efff00",
          "50_87": "#ecf0fd87",
          "50_6d": "#ecf0fd6d",
        },
        purple: { 400: "#9b5c8f" },
        indigo: { 50: "#d9e4f6", "50_7f": "#d7e3f87f" },
        gray: { 100: "#f6f6f6", 900: "#222222" },
        orange: { 300: "#ffba49" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        circularstd: "Circular Std",
        roboto: "Roboto",
        oswald: "Oswald",
        varelaround: "Varela Round",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#e5efff,#e5efff42,#e5efff00)",
        gradient1:
          "linear-gradient(180deg ,#ecf0fd00,#ecf0fd87,#ecf0fd,#ecf0fd6d,#ecf0fd00)",
      },
      boxShadow: {
        bs: "0px 18px  52px 0px #a1adc07f",
        bs1: "0px 18px  52px 0px #d7e3f87f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
