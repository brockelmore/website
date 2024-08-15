<script lang="ts">
	import Range from '../interval-math/Range.svelte'

	$: innerWidth = 320
	let w: number
	$: {
		let min = innerWidth / 2
		let max = 130
		w = min > max ? max : min
	}
</script>

<svelte:window bind:innerWidth />

<div
	class="bg-gray-2 border border-gray-3 flex flex-col justify-center content-center items-center prose-limit mb-5"
>
	<Range width={130} name={'length'} handles={false} showU8={false} bordered={false} />
	<div class="flex flex-row justify-center content-center items-center prose-limit">
		<Range width={w} name={'key'} handles={false} showU8={false} bordered={false} />
		<div class="text-2xl text-center align-text-top relative top-[4px] text-green-400">:</div>
		<Range width={w} name={'value'} handles={false} showU8={false} bordered={false} />
	</div>
	<div
		class="text-l text-center align-text-top relative top-[4px]"
		style:transform="rotate(90deg)"
		style:right="-5px"
	>
		. . .
	</div>
	<div class="flex flex-row justify-center content-center items-center prose-limit">
		<Range width={w} name={'key'} handles={false} showU8={false} bordered={false} />
		<div class="text-2xl text-center align-text-top relative top-[4px] text-green-400">:</div>
		<Range width={w} name={'value'} handles={false} showU8={false} bordered={false} />
	</div>
</div>
