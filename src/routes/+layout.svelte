<script lang="ts">
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import PageTransition from './transition.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	import '../app.css'

	export let data



    injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="static dark w-full">
	<Header />
	<main
		class="mx-auto w-full grow p-4 md:px-20 md:py-16 relative flex max-w-5xl flex-col px-0 pb-6"
	>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
</div>
