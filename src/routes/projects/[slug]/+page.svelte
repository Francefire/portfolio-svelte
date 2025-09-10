<script lang="ts">
	import { personalInfo, SkillBadge } from '$lib';
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
	const { project } = data;
</script>

<svelte:head>
	<title>{project.titre} - {personalInfo.name}</title>
	<meta name="description" content={project.resume} />
</svelte:head>

<!-- Header du projet -->
<section class="bg-neutral-50 dark:bg-neutral-900 py-16">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.titre}</h1>
			{#if project.periode}
				<p class="text-lg text-blue-600 font-medium mb-2">{project.periode}</p>
			{/if}
			{#if project.role}
				<p class="text-md text-gray-600 mb-6">{project.role}</p>
			{/if}
			<p class="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
				{project.resume}
			</p>
		</div>
	</div>
</section>

<!-- Navigation -->
<section class="py-4 bg-white border-b">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<nav class="flex items-center text-sm text-gray-600">
			<a href="/projects" class="hover:text-blue-600 transition-colors">Projets</a>
			<span class="mx-2">/</span>
			<span class="text-gray-900">{project.titre}</span>
		</nav>
	</div>
</section>

<!-- Contenu du projet -->
<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Contenu principal -->
			<div class="lg:col-span-2 space-y-8">
				{#if project.contexte}
					<div>
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Contexte</h2>
						<p class="text-gray-700 leading-relaxed">{project.contexte}</p>
					</div>
				{/if}
				
				{#if project.defi}
					<div>
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Défi</h2>
						<p class="text-gray-700 leading-relaxed">{project.defi}</p>
					</div>
				{/if}
				
				{#if project.approche}
					<div>
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Approche</h2>
						<p class="text-gray-700 leading-relaxed">{project.approche}</p>
					</div>
				{/if}
				
				{#if project.resultat}
					<div>
						<h2 class="text-2xl font-bold text-gray-900 mb-4">Résultat</h2>
						<p class="text-gray-700 leading-relaxed">{project.resultat}</p>
					</div>
				{/if}
			</div>
			
			<!-- Sidebar -->
			<div class="lg:col-span-1">
				<div class="bg-gray-50 p-6 rounded-lg sticky top-8 space-y-6">
					<!-- Technologies -->
					<div>
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
						<div class="flex flex-wrap gap-2">
							{#each project.stack as tech}
								<span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
									{tech}
								</span>
							{/each}
						</div>
					</div>
					
					<!-- Mots-clés -->
					{#if project.mots_cles && project.mots_cles.length > 0}
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-3">Mots-clés</h3>
							<div class="flex flex-wrap gap-2">
								{#each project.mots_cles as keyword}
									<span class="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded">
										{keyword}
									</span>
								{/each}
							</div>
						</div>
					{/if}
					
					<!-- Actions -->
					<div class="space-y-3">
						{#if project.lien_demo}
							<a 
								href={project.lien_demo}
								target="_blank"
								rel="noopener noreferrer"
								class="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
							>
								Voir la démo
							</a>
						{/if}
						{#if project.repo}
							<a 
								href={project.repo}
								target="_blank"
								rel="noopener noreferrer"
								class="block w-full border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-md hover:bg-gray-50 transition-colors font-medium"
							>
								Voir le code
							</a>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Navigation vers d'autres projets -->
<section class="py-16 bg-gray-50">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Autres projets</h2>
		<div class="text-center">
			<a 
				href="/projects"
				class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
			>
				Voir tous mes projets
			</a>
		</div>
	</div>
</section>