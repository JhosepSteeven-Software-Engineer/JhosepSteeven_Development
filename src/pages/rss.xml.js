import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE } from '../site.config';
import { paths, postPath } from '../paths';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: `${SITE.name} — Blog`,
		description: SITE.description,
		// `context.site` no incluye el `base`, así que lo añadimos a mano.
		site: new URL(paths.base, context.site),
		items: posts.map((post) => ({
			...post.data,
			link: postPath(post.id),
		})),
	});
}
