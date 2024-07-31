import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			colors: {
				purple: {
					50: "#FBFAFF",
					100: "#F4F0FE",
					200: "#EDE7FE",
					300: "#DBCEFD",
					400: "#A685FA",
					500: "#946CF9",
					600: "#8254F8",
					700: "#703BF7",
				},
				grey: {
					50: "#999999",
					100: "#808080",
					200: "#666666",
					300: "#4D4D4D",
					400: "#333333",
					500: "#262626",
					600: "#1A1A1A",
					700: "#141414",
				},
				white: {
					50: "#FCFCFD",
					100: "#F7F7F8",
					200: "#F1F1F3",
					300: "#E4E4E7",
					400: "#FFFFFF",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
