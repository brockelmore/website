import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../posts/${params.slug}/${params.slug}.mdx`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (err) {
		throw error(404, `Could not find ${params.slug}`)
	}
}
