import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { escapeSvelte, mdsvex } from 'mdsvex'
import shiki from 'shiki'

import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.mdx'],
	layout: './src/Layout.svelte',
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: 'poimandres'
			})

			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))

			return `{@html \`${html}\`}`
		}
	},
	remarkPlugins: [
		remarkUnwrapImages,
		[
			remarkToc,
			{
				tight: true
			}
		]
	],
	rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}

export default config
