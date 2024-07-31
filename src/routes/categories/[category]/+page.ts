import { error } from '@sveltejs/kit'
import type { Categories, Post } from '$lib/types'
import { categories } from '../../../lib/config.js'

export async function load({ params, fetch }) {
	try {
		if (!categories.includes(params.category)) {
			throw new Error(`Category \`${params.category}\` doesn't exist`)
		}

		const response = await fetch('/api/posts')
		let posts: Post[] = await response.json()

		posts = posts.filter((post) => post.categories.includes(params.category as Categories))

		return {
			posts,
			category: params.category
		}
	} catch (err) {
		throw error(404, (err as Error).message)
	}
}
