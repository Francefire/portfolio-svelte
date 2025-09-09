<script lang="ts">
	import { projects, ProjectCard, personalInfo } from '$lib';
	
	let searchQuery = $state('');
	let selectedTech = $state('');
	
	// Récupérer toutes les technologies uniques
	const allTechnologies = [...new Set(projects.flatMap(p => p.stack))].sort();
	
	// Filtrer les projets
	const filteredProjects = $derived(() => {
		return projects.filter(project => {
			const matchesSearch = !searchQuery || 
				project.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.resume.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.contexte?.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.mots_cles?.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
			
			const matchesTech = !selectedTech || project.stack.includes(selectedTech);
			
			return matchesSearch && matchesTech;
		});
	});
</script>

<svelte:head>
	<title>Projets - {personalInfo.name}</title>
	<meta name="description" content="Découvrez mes projets et réalisations techniques" />
</svelte:head>

<!-- Header -->
<section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mes Projets</h1>
			<p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
				Découvrez mes réalisations techniques, des projets web aux applications mobiles, 
				en passant par des solutions full stack complètes.
			</p>
		</div>
	</div>
</section>

<!-- Filtres et recherche -->
<section class="py-8 bg-white border-b">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row gap-4">
			<!-- Barre de recherche -->
			<div class="flex-1">
				<label for="search" class="sr-only">Rechercher un projet</label>
				<input
					id="search"
					type="text"
					bind:value={searchQuery}
					placeholder="Rechercher un projet..."
					class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>
			
			<!-- Filtre par technologie -->
			<div>
				<label for="tech-filter" class="sr-only">Filtrer par technologie</label>
				<select
					id="tech-filter"
					bind:value={selectedTech}
					class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				>
					<option value="">Toutes les technologies</option>
					{#each allTechnologies as tech}
						<option value={tech}>{tech}</option>
					{/each}
				</select>
			</div>
		</div>
		
		<!-- Résultats de recherche -->
		<div class="mt-4 text-sm text-gray-600">
			{filteredProjects().length} projet{filteredProjects().length !== 1 ? 's' : ''} 
			{searchQuery || selectedTech ? 'trouvé' + (filteredProjects().length !== 1 ? 's' : '') : 'au total'}
		</div>
	</div>
</section>

<!-- Grille de projets -->
<section class="py-16 bg-gray-50">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if filteredProjects().length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredProjects() as project}
					<ProjectCard {project} />
				{/each}
			</div>
		{:else}
			<div class="text-center py-12">
				<div class="text-gray-400 text-6xl mb-4">🔍</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">Aucun projet trouvé</h3>
				<p class="text-gray-600 mb-6">
					Essayez de modifier vos critères de recherche ou de sélectionner une autre technologie.
				</p>
				<button
					onclick={() => {
						searchQuery = '';
						selectedTech = '';
					}}
					class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
				>
					Réinitialiser les filtres
				</button>
			</div>
		{/if}
	</div>
</section>

<!-- Technologies utilisées -->
<section class="py-16 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies utilisées</h2>
		<div class="flex flex-wrap justify-center gap-3">
			{#each allTechnologies as tech}
				<button
					onclick={() => selectedTech = selectedTech === tech ? '' : tech}
					class="px-4 py-2 rounded-lg font-medium transition-colors 
						{selectedTech === tech 
							? 'bg-blue-600 text-white' 
							: 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
				>
					{tech}
				</button>
			{/each}
		</div>
	</div>
</section>