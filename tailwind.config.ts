import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#87a2ff",
                primary90: "#87a2ff90",
                primary80: "#87a2ff80",
                primary70: "#87a2ff70",
                primary60: "#87a2ff60",
                primary50: "#87a2ff50",
                primary40: "#87a2ff40",
                primary30: "#87a2ff30",
                primary20: "#87a2ff20",
                primary10: "#87a2ff10",
            },
        },
    },
    plugins: [],
};
export default config;
