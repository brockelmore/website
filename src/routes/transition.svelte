<script lang="ts">
	import { fly } from 'svelte/transition'

	export let url = ''
</script>

{#key url}
	<div
		class="transition w-full relative flex grow flex-col"
		in:fly={{ y: +100, duration: 30 }}
	>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
