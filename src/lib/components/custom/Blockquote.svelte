<script lang="ts">
	import { Quote } from 'lucide-svelte'
	import { twMerge } from 'tailwind-merge'

	import A from './A.svelte'

	export let className
	export let source

	console.log(source)
</script>

<blockquote
	class={twMerge(
		'relative my-4 overflow-hidden rounded border border-gray-6 bg-gray-3 p-0',
		className
	)}
	{...$$props}
>
	<div class="absolute left-0 top-0 h-full w-1 bg-gray-9" aria-hidden={true} />
	<div class="w-full py-3 pl-5 pr-4 text-base leading-normal [&>*]:my-0">
		<slot />
	</div>
	{#if source}
		<!-- The right padding is intentionally shorter (even after adjusting
      for the index) than the left side by 4px because the indent makes
      the left side appear more cramped. -->
		<div
			class="flex w-full gap-1.5 border-t border-gray-6 py-1.5 pl-5 pr-4 text-xs font-normal not-italic leading-4 text-gray-11"
		>
			<span class="pt-0.5 text-gray-11">
				<Quote class="size-3" />
			</span>
			{#if source.url}
				<A href={source.url}>{source.label || 'Source'}</A>
			{:else}
				{source.label}
			{/if}
		</div>
	{/if}
</blockquote>
