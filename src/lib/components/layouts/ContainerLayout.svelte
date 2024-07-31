<script>
	import { twMerge } from 'tailwind-merge'
	export let className = ''
</script>

<div
	class={twMerge('w-full max-w-[60rem] grow p-4 md:px-20 md:py-16', className)}
	{...$$props}
>
	<slot />
</div>
