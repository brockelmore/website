<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	export let className = undefined
	export let fullBleedCodeBlocks = false
	let extraClasses = fullBleedCodeBlocks
		? [
				// Container
				'[&_[code-block-container]]:-mx-4 [&_[code-block-container]]:rounded-none [&_[code-block-container]]:border-x-0',
				'md:[&_[code-block-container]]:mx-0 md:[&_[code-block-container]]:rounded-xl md:[&_[code-block-container]]:border-x',
				// Pre
				'[&_[code-block-pre]]:rounded-none',
				'md:[&_[code-block-pre]]:rounded-b-[0.6875rem]'
		  ]
		: ''
</script>

<article
	class={twMerge(
		'prose prose-gray max-w-none grow px-4 dark:prose-invert' +
			' prose-h1:mb-4' +
			' prose-h2:mb-2 prose-h2:mt-6 prose-h2:md:mb-4 prose-h2:md:mt-12' +
			' prose-h3:mb-2 prose-h3:mt-5 prose-h3:md:mb-4 prose-h3:md:mt-6' +
			' prose-blockquote:border-gray-6' +
			' prose-li:text-gray-11 prose-li:marker:text-gray-9',
		extraClasses,
		className
	)}
	{...$$props}
>
	<slot />
</article>
