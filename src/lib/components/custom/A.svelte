<script lang="ts">
	export let href
	let startsWith = href.startsWith('/') || href.startsWith('#')
</script>

{#if href && startsWith}
	<a
		data-sveltekit-preload-data="hover"
		class="mdx--link group font-medium text-blue-9 no-underline hover:underline has-[code]:focus-visible:ring-0"
		{href}
	>
		<slot />
	</a>
{:else}
	<a
		class="mdx--link group w-fit font-medium text-blue-9 no-underline hover:underline has-[code]:focus-visible:ring-0"
		{href}
		target="_blank"
		rel="noopener noreferrer"
		{...$$props}
	>
		<slot />
	</a>
{/if}
