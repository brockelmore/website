<script lang="ts">
	import Range from '../interval-math/Range.svelte'

	export let nameA = 'a'
	export let nameB = 'b'
	export let percentSeparation = 0

	let innerWidth = 320 / 2
	let offestSpace = Math.floor((percentSeparation * innerWidth) / 200)
	let w: number = innerWidth - offestSpace
	let offset1 = 0
	let offset2 = 0
	offset1 = Math.floor((percentSeparation * w) / 200) //- (min > max ? 0 : 2)
	offset2 = Math.floor((-1 * percentSeparation * w) / 200)
</script>

<!-- <svelte:window bind:innerWidth /> -->

<div
	class="relative flex flex-col justify-center content-center items-center prose-limit mb-[-100px]"
>
	<div class="not-prose text-sm text-grey-8 text-center italic mb-[10px]">
		The green shaded area is where the two intervals intersect.
		<br />The yellow lines are the minimums, the green lines are the maximums.
	</div>
	<div class="not-prose text-sm text-grey-8 text-center italic mb-[10px]" />
	<div
		class="w-full bg-gray-2 border border-gray-3 flex flex-col justify-center content-center items-center prose-limit mb-5 flex-wrap"
	>
		<Range
			width={w}
			extend={'down'}
			offset={offset1}
			name={nameA}
			handles={false}
			showU8={false}
			bordered={false}
		/>
		<Range
			width={w}
			extend={'up'}
			offset={offset2}
			name={nameB}
			handles={false}
			showU8={false}
			bordered={false}
		/>
	</div>
	<div
		class="overlap z-0 relative top-[-169px]"
		style:width={`${(w * (100 - percentSeparation)) / 100}px`}
		style:height={`${100}px`}
	/>
</div>

<style>
	.overlap {
		background: repeating-linear-gradient(45deg, #052e16, #052e16 10px, #14532d 10px, #14532d 20px);
	}
</style>
