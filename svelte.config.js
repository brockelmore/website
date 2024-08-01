import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { escapeSvelte, mdsvex } from 'mdsvex'
import { createHighlighter } from 'shiki'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex-svelte'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.mdx', '.svx'],
	layout: './src/Layout.svelte',
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeKatex],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				langs: ['solidity'],
				themes: ['houston']
			})

			await highlighter.loadTheme('houston')
			await highlighter.loadLanguage('solidity')
			const html = escapeSvelte(
				highlighter.codeToHtml(code, { lang: 'solidity', theme: 'houston' })
			)

			return `{@html \`${html}\`}`
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexOptions.extensions],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}

export default config
