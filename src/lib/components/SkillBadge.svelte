<script lang="ts">
	import { reveal } from 'svelte-reveal';
	let { skills, title = "Compétences" }: { skills: string[], title?: string } = $props();
</script>

<div class="mb-8 text-neutral-900 dark:text-neutral-100" use:reveal>
	{#if title}
		<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 text-center">{title}</h3>
	{/if}
	<div class="flex flex-wrap gap-3 justify-center">
		{#each skills as skill, i}
			<span 
				class="px-3 py-2 bg-primary-100/70 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg border border-primary-200/60 dark:border-primary-700/60 hover:bg-primary-200/70 dark:hover:bg-primary-800/40 transition"
				style="animation-delay: {i * 50}ms"
			>
				{skill}
			</span>
		{/each}
	</div>
</div>