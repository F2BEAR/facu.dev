/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: () => ({
				black: '#01000D',
				white: '#DDDDDD',
				cyan: '#00E0FF',
			}),
			fontFamily: {
				base: ['var(--base-font)'],
				mono: ['var(--mono-font)'],
			},
			dropShadow: {
				sm: '0 0 0.5rem rgb(0, 224, 255)',
			},
		},
	},
	plugins: [],
};
