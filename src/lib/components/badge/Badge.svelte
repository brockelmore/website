<script lang="ts">
  import { badgeVariants } from './styles';
  import type { BadgeProps } from './types';
  import { twMerge } from 'tailwind-merge';

  export let className;
  export let size = 'md';
  export let variant = 'primary';
  export let intent = 'none';
  export let type = 'text';
</script>

<span
    class={twMerge(badgeVariants({ size, variant, intent, type }), className)}
    data-size={size}
    data-variant={variant}
    {...$$props}
>
    <slot />
</span>
