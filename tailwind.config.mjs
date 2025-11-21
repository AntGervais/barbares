/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'wood': '#401200',
				'blood': '#6b0000',
				'neon': '#ff0d0a',
				'deep-black': '#000000',
				'paper': '#F5F5F0',
			},
			fontFamily: {
				'altero': ['Altero', 'Anton', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'scribble': ['"Reenie Beanie"', '"Gloria Hallelujah"', 'cursive'],
			},
			animation: {
				'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite',
			},
			keyframes: {
				shake: {
					'10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
					'20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
					'30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
					'40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
				},
			},
		},
	},
	plugins: [],
}
