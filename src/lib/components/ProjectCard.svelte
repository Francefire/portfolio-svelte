<script lang="ts">
	import type { ProjectType } from '$lib';
	
	let { project }: { project: ProjectType } = $props();
</script>

<article class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
	<div class="p-6">
		<!-- Header -->
		<div class="flex justify-between items-start mb-4">
			<h3 class="text-xl font-semibold text-gray-900 mb-2">{project.titre}</h3>
			{#if project.periode}
				<span class="text-sm text-gray-500 font-medium">{project.periode}</span>
			{/if}
		</div>
		
		{#if project.role}
			<p class="text-sm text-blue-600 font-medium mb-3">{project.role}</p>
		{/if}
		
		<!-- Description -->
		<p class="text-gray-700 mb-4 leading-relaxed">{project.resume}</p>
		
		<!-- Stack -->
		<div class="flex flex-wrap gap-2 mb-4">
			{#each project.stack as tech}
				<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
					{tech}
				</span>
			{/each}
		</div>
		
		<!-- Actions -->
		<div class="flex gap-3 pt-4 border-t">
			<a 
				href="/projects/{project.slug}" 
				class="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
			>
				Voir détails
			</a>
			{#if project.lien_demo}
				<a 
					href={project.lien_demo} 
					target="_blank"
					rel="noopener noreferrer"
					class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
				>
					Demo
				</a>
			{/if}
			{#if project.repo}
				<a 
					href={project.repo} 
					target="_blank"
					rel="noopener noreferrer"
					class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
				>
					Code
				</a>
			{/if}
		</div>
	</div>
</article>