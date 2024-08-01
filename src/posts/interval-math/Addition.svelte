<script lang="ts">
	import Range from './Range.svelte'
	export let lhs_name = ''
	export let rhs_name = ''
	export let lhs_start = 0
	export let lhs_end = 255
	export let rhs_start = 0
	export let rhs_end = 255
	export let locked = false
	export let showU8 = false

	let res_start = 0
	let res_end = 255

	function clamp(num, min, max) {
		return num < min ? min : num > max ? max : num
	}

	function add(lhs, rhs) {
		return clamp(lhs + rhs, 0, 255)
	}

	$: if (!locked) { rhs_end = ((lhs_start + lhs_start + rhs_end) > 255) ? 255 - lhs_start : Math.max(lhs_start + rhs_end, 255 - lhs_start) }
	$: if (!locked) { lhs_end = ((rhs_start + rhs_start + lhs_end) > 255) ? 255 - rhs_start : Math.max(rhs_start + lhs_end, 255 - rhs_start) }
	$: res_start = add(lhs_start, rhs_start)
	$: res_end = add(lhs_end, rhs_end)
</script>

<div class="flex flex-col justify-center content-center items-center prose-limit">
    {#if !locked}
        <div class="not-prose text-sm text-grey-8 text-center italic">drag the minimums around to see how the result and maximums change</div>
        <div class="not-prose text-sm text-grey-8 text-center italic">red means the result would panic</div>
    {/if}
    <div class="not-prose flex flex-col w-[355px] rounded bg-gray-2 mt-2">
     	<Range name={lhs_name} bind:start={lhs_start} bind:end={lhs_end} {showU8} {locked} bordered={false}/>
     	<div class="text-4xl text-center border border-gray-4 align-text-top">+</div>
     	<Range name={rhs_name} bind:start={rhs_start} bind:end={rhs_end} {showU8} {locked} bordered={false}/>
     	<div class="text-4xl text-center border border-gray-4 align-text-top">=</div>
     	<Range
      		name={`${lhs_name} + ${rhs_name}`}
      		bind:start={res_start}
      		bind:end={res_end}
      		locked={true}
      		{showU8}
            bordered={false}
     	/>
	</div>
</div>
