<script lang="ts">
	import { Link } from 'lucide-svelte'
	import { page } from '$app/stores'
	let base = $page.url.origin
	let pathname = $page.url.pathname
	let header: any
	let link: any
	let id = ''
	$: if (header) {
		id = header.innerText
			.toLowerCase()
			.replace(/[^\w\s-]/g, '') // Remove special characters
			.replace(/\s+/g, '-') // Replace spaces with hyphens
			.replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
			.trim()
		header.id = id
		link.href = `#${id}`
	}
</script>

<a
	bind:this={link}
	href={'#test'}
	class="not-prose group mb-4 flex flex-row w-full items-center gap-3 rounded text-3xl font-semibold tracking-tight text-gray-12 no-underline md:gap-4 md:text-4xl"
	data-sveltekit-preload-data="off"
	on:click={() => {
		navigator.clipboard.writeText(`${base}${pathname}#${id}`)
	}}
>
	<h1 class="not-prose min-w-fit flex-shrink" bind:this={header} {...$$props}>
		<slot />
	</h1>
	<Link
		class="hidden size-5 text-gray-11 animate-in fade-in-50 group-hover:flex group-focus-visible:flex md:size-6"
	/>
</a>
