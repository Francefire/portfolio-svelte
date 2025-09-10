<script lang="ts">
	import type { ProjectType } from '$lib';
	import { reveal } from 'svelte-reveal';
	
	let { project }: { project: ProjectType } = $props();
</script>

<article class="group bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden" use:reveal>
		<!-- Header -->
		<div class="flex justify-between items-start mb-4">
			<h3 class="text-xl font-semibold text-black dark:text-white group-hover:text-blue-600 transition mb-2">{project.titre}</h3>
			{#if project.periode}
				<span class="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-medium">{project.periode}</span>
			{/if}
		</div>
		
		{#if project.role}
			<p class="text-sm text-blue-600 font-medium mb-3">{project.role}</p>
		{/if}
		
		<!-- Description -->
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.resume}</p>
		
		<!-- Stack -->
		<div class="flex flex-wrap gap-2 mb-6">
			{#each project.stack as tech}
				<span class="px-2.5 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-[11px] font-medium rounded-md">
					{tech}
				</span>
			{/each}
		</div>
		
		<!-- Actions -->
		<div class="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
			<a 
				href="/projects/{project.slug}" 
				class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 px-4 rounded-lg text-sm font-medium transition"
			>
				Voir détails
			</a>
			{#if project.lien_demo}
				<a 
					href={project.lien_demo} 
					target="_blank"
					rel="noopener noreferrer"
					class="px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium"
				>
					Demo
				</a>
			{/if}
			{#if project.repo}
				<a 
					href={project.repo} 
					target="_blank"
					rel="noopener noreferrer"
					class="px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium"
				>
					Code
				</a>
			{/if}
		</div>
</article>