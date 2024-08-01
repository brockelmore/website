<script lang="ts">
	import { formatDate } from '$lib/utils'
	import Article from '$lib/components/custom/Article.svelte'
	import Badge from '$lib/components/badge/Badge.svelte'
	import Layout from '../../Layout.svelte'
	import { page } from '$app/stores'
	export let data

	let origin = $page.origin
	let ogImgUrl = `https://brocke.xyz/og?description=${encodeURIComponent(data.meta.description.replace("&", "and"))}&title=${encodeURIComponent(data.meta.path)}`
	// let ogImgUrl = `${origin}/og?description=${data.meta.description}&title=${data.meta.title}`
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:url" content={`https://brocke.xyz/${data.meta.path}`} />
	<meta property="og:site_name" content="brocke" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:image" content={ogImgUrl} />
	<meta property="og:image:alt" content={`Open Graph image for ${data.meta.title}`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="twitter:card" content='summary_large_image' />
	<meta property="twitter:creator" content='@brockjelmore' />
	<meta property="twitter:title" content={data.meta.title} />
	<meta property="twitter:description" content={data.meta.description} />
	<meta property="twitter:image" content={ogImgUrl} />
	<meta property="twitter:image:alt" content={`Open Graph image for ${data.meta.title}`} />
	<meta property="twitter:image:width" content="1200" />
	<meta property="twitter:image:height" content="630" />
</svelte:head>

<Layout>
	<Article fullBleedCodeBlocks={true}>
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Published on {formatDate(data.meta.date)}</p>
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
