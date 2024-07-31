<script>
	import { twMerge } from 'tailwind-merge'
	export let className = ''
</script>

<div
	class={twMerge(
		'-mx-4 flex max-w-[100vw] items-center overflow-x-scroll border-y border-gray-6 bg-gray-2 p-4 md:mx-0 md:max-w-full md:rounded-lg md:border-x [&>p]:my-0 [&>span]:mx-auto',
		className
	)}
>
	<slot />
</div>
