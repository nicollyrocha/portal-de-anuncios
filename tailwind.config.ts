import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
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
			backgroundImage: {
				'search-banner':
					"url('https://proxis.com.br/wp-content/uploads/2019/02/mulher-sorrindo-no-parque.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
