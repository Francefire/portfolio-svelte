<script lang="ts">
	let { skills, title = "Compétences" }: { skills: string[], title?: string } = $props();
</script>

<div class="mb-6">
	<h3 class="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
	<div class="flex flex-wrap gap-2">
		{#each skills as skill}
			<span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
				{skill}
			</span>
		{/each}
	</div>
</div>