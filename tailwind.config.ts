import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eaf3ee",
          100: "#cfe4d8",
          300: "#7fb897",
          500: "#2f8a4c",
          700: "#1c6b34",
          900: "#0f3d1f",
        },
        cream: {
          50: "#faf8f2",
          100: "#f2eee1",
        },
        gold: {
          400: "#d6ae5c",
          500: "#c99a3c",
          700: "#8a6a24",
        },
        ink: {
          900: "#1a1f1c",
          700: "#3a423d",
          500: "#6b756f",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
