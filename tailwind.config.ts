import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				openmenu: 'openmenu 1s ease-in',
				closemenu: 'closemenu 1s ease-in',
			},
			keyframes: {
				openmenu: {
					// initial position
					'0%': { opacity: '0%' },
					// final position
					'100%': { opacity: '100%' },
				},
				closemenu: {
					// initial position
					'0%': { opacity: '100%' },
					// final position
					'100%': { opacity: '0%' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
