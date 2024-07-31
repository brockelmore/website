<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<svelte:head>
	<title>Categories | {data.category}</title>
</svelte:head>

<section>
	<div class="category-title">
		<h2>Posts for #{data.category}</h2>
		<p>{data.posts.length} post found</p>
	</div>

	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={`/${post.slug}`} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.category-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: var(--size-7);
	}
	.category-title h2 {
		padding-bottom: var(--size-3);
	}
	.posts {
		display: grid;
		gap: var(--size-7);
	}
	.post {
		max-inline-size: var(--size-content-3);
	}
	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
