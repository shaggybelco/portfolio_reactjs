/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      fontFamily: {
        sans: ["Black Ops One"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
    },
    extend: {
      BackgroundImage: {
        pragramming: "url('./src/assets/programming.svg')",
      },
    },
  },
  daisyui: {
    themes: ["black", "business"],
  },
  plugins: [daisyui,],
};
