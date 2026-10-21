// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// URL pública del sitio (la que usa GitHub Pages para este repositorio).
	site: 'https://jhosepsteeven-software-engineer.github.io/JhosepSteeven_Development',
	// GitHub Pages sirve los proyectos en /<nombre-del-repo>, así que Astro
	// necesita saber que la raíz del sitio vive en esa subcarpeta.
	base: '/JhosepSteeven_Development',
	integrations: [mdx(), sitemap()],
	markdown: {
		// El fondo de los bloques de código lo pone global.css (para que
		// coincida con el resto del diseño). Shiki solo pone los colores.
		shikiConfig: {
			theme: 'github-dark',
			defaultColor: false,
			wrap: true,
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
