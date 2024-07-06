import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'dark-primary-bg': '#141414',
      'dark-secondary-bg': '#232324',
      'dark-tertiary-bg': '#202021',
      'dark-modal-bg': '#303030',
      'dark-accent-bg': '#0047BB',
      'dark-succes-bg': '#2E7D32',
      'dark-error-bg': '#D32F2F',

      'dark-primary-text': '#E1E3E6',
      'dark-secondary-text': '#B0B1B6',
      'dark-tertiary-text': '#76787A',
      'dark-accent-text': '#0047BB',
      'dark-succes-text': '#2E7D32',
      'dark-error-text': '#D32F2F',

      'brand-blue': '#0047BB',
      'brand-dark-blue': '#001A72',
      'brand-orange': '#FA4616',
      'brand-white': '#FFFFFF',
      'brand-black': '#101820',

      'dark-primary-border': '#363738',
      'dark-accent-border': '#0047BB',
      'dark-succes-border': '#2E7D32',
      'dark-error-border': '#D32F2F',

      'state-accent-disabled': '#424242',
      'state-blue-hover': '#003182',
      'state-blue-focused': '#4C7ECF'

    }
  },
  plugins: [],
};
export default config;
