/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	  './node_modules/flowbite/**/*.js'
	],
	theme: {
		screens: {
		  'xsm': '350px',
		  // => @media (min-width: 350px) { ... }

		  'sm': '640px',
		  // => @media (min-width: 640px) { ... }
	
		  'md': '768px',
		  // => @media (min-width: 768px) { ... }
	
		  'lg': '1024px',
		  // => @media (min-width: 1024px) { ... }
	
		  'xl': '1280px',
		  // => @media (min-width: 1280px) { ... }
	
		  '2xl': '1536px',
		  // => @media (min-width: 1536px) { ... }
		}
	},
	plugins: [require('flowbite/plugin')],
}
