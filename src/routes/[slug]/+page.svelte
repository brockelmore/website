<script lang="ts">
	import { formatDate } from '$lib/utils'
	import Article from '$lib/components/custom/Article.svelte'
	import Badge from '$lib/components/badge/Badge.svelte'
	import Layout from '../../Layout.svelte'
	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Layout>
	<Article fullBleedCodeBlocks={true}>
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Published at {formatDate(data.meta.date)}</p>
		</hgroup>

		<div class="flex">
			{#each data.meta.categories as category}
				<Badge className="not-prose m-1 p-3">
					<a href={`/categories/${category}`}>&num;{category}</a>
				</Badge>
			{/each}
		</div>

		<svelte:component this={data.content} />
	</Article>
</Layout>
