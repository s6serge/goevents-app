/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#1E3A8A',
        secondary: '#3B82F6',
        accent: '#F59E0B',
        textPrimary: '#374151',
        textSecondary: '#9CA3AF',
        background: '#FFFFFF'
      },
    },
  },
  plugins: [],
};
