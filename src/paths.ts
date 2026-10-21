/**
 * Rutas internas del sitio.
 *
 * GitHub Pages publica este proyecto en `/JhosepSteeven_Development/`, así que
 * todos los enlaces internos necesitan ese prefijo. `import.meta.env.BASE_URL`
 * contiene el valor de `base` de `astro.config.mjs`.
 *
 * Astro puede devolverlo con o sin barra final según la versión, así que aquí
 * lo normalizamos SIEMPRE con barra final. Así concatenar es seguro:
 *   `${paths.about}`  ->  "/JhosepSteeven_Development/about"
 *
 * Úsalo siempre en vez de escribir "/about" a mano:
 *   <a href={paths.about}>Sobre mí</a>
 */
const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export const paths = {
	base,
	home: base,
	about: `${base}about`,
	blog: `${base}blog`,
} as const;

/** Construye la URL de un post del blog a partir de su id. */
export const postPath = (id: string) => `${base}blog/${id}/`;
