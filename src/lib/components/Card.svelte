<script lang="ts">
  let { as = 'div', className = '', children } = $props();
  const Tag = as as keyof HTMLElementTagNameMap;
</script>

<svelte:element this={Tag} class={`relative rounded-2xl border border-neutral-200/70 dark:border-neutral-700/60 bg-white/60 dark:bg-neutral-800/40 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-neutral-800/30 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-2px_rgba(0,0,0,0.06)] ${className}`}>
  <div class="absolute inset-px rounded-[15px] bg-gradient-to-br from-white/70 via-white/40 to-white/10 dark:from-neutral-800/60 dark:via-neutral-800/40 dark:to-neutral-900/20 pointer-events-none"></div>
  <div class="relative z-10 p-5">
    {@render children?.()}
  </div>
</svelte:element>
