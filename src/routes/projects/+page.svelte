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

<section class="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900">
	<div class="container-constrained">
		<div class="text-center animate-fade-up">
			<h1 class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-6">Portfolio Technique</h1>
			<h2 class="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-neutral-900 dark:text-neutral-100">Mes Projets</h2>
			<p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
				Découvrez mes réalisations techniques, des projets web aux applications mobiles, 
				en passant par des solutions full stack complètes.
			</p>
		</div>
	</div>
</section>

<!-- Filtres et recherche -->
<section class="py-12 border-b border-neutral-200 dark:border-neutral-700">
	<div class="container-constrained">
		<div class="flex flex-col md:flex-row gap-6">
			<!-- Barre de recherche -->
			<div class="flex-1">
				<label for="search" class="sr-only">Rechercher un projet</label>
				<input
					id="search"
					type="text"
					bind:value={searchQuery}
					placeholder="Rechercher un projet..."
					class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white/60 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur transition"
				/>
			</div>
			
			<!-- Filtre par technologie -->
			<div class="md:w-64">
				<label for="tech-filter" class="sr-only">Filtrer par technologie</label>
				<select
					id="tech-filter"
					bind:value={selectedTech}
					class="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white/60 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur transition"
				>
					<option value="">Toutes les technologies</option>
					{#each allTechnologies as tech}
						<option value={tech}>{tech}</option>
					{/each}
				</select>
			</div>
		</div>
		
		<!-- Résultats de recherche -->
		<div class="mt-6 text-sm text-neutral-600 dark:text-neutral-400 font-medium">
			{filteredProjects().length} projet{filteredProjects().length !== 1 ? 's' : ''} 
			{searchQuery || selectedTech ? 'trouvé' + (filteredProjects().length !== 1 ? 's' : '') : 'au total'}
		</div>
	</div>
</section>

<!-- Grille de projets -->
<section class="py-20">
	<div class="container-constrained">
		{#if filteredProjects().length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredProjects() as project}
					<ProjectCard {project} />
				{/each}
			</div>
		{:else}
			<div class="text-center py-20">
				<div class="text-6xl mb-6 opacity-50">🔍</div>
				<h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Aucun projet trouvé</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
					Essayez de modifier vos critères de recherche ou de sélectionner une autre technologie.
				</p>
				<button
					onclick={() => {
						searchQuery = '';
						selectedTech = '';
					}}
					class="inline-flex items-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400 text-white px-6 py-3 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
				>
					Réinitialiser les filtres
				</button>
			</div>
		{/if}
	</div>
</section>

<!-- Technologies utilisées -->
<section class="py-20 bg-neutral-50 dark:bg-neutral-900">
	<div class="container-constrained">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">Technologies utilisées</h2>
			<p class="text-neutral-600 dark:text-neutral-400">Cliquez sur une technologie pour filtrer les projets</p>
		</div>
		<div class="flex flex-wrap justify-center gap-3">
			{#each allTechnologies as tech}
				<button
					onclick={() => selectedTech = selectedTech === tech ? '' : tech}
					class="px-4 py-2.5 rounded-lg font-medium transition-all 
						{selectedTech === tech 
							? 'bg-primary-600 text-white shadow-lg scale-105' 
							: 'bg-neutral-200/70 dark:bg-neutral-700/60 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-300/70 dark:hover:bg-neutral-600/70 hover:scale-105'}"
				>
					{tech}
				</button>
			{/each}
		</div>
	</div>
</section>