<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	import ContainerLayout from '$lib/components/layouts/ContainerLayout.svelte'
	import About from '$lib/components/About.svelte'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<About />

<ContainerLayout className="inset-y-0 left-0 flex justify-center max-w-3xl flex-col px-0 pb-6 pt-0">
	<ul class="not-prose w-full flex flex-col -space-y-px">
		{#each data.posts as post}
			<li
				class="not-prose border-solid border-b-2 border-gray-6 px-2 py-3 hover:bg-gray-4 active:bg-gray-5"
			>
				<a href={post.slug} class="text-xl flex w-full transition-colors">{post.title}</a>
				<p class="flex text-sm w-full transition-colors">
					{formatDate(post.date)}
				</p>
				<p class="flex text-sm w-full transition-colors">
					{post.description}
				</p>
			</li>
		{/each}
	</ul>
</ContainerLayout>
