<script lang="ts">
	import { personalInfo, projects, skills, ProjectCard, SkillBadge } from '$lib';
	
	// Projets mis en avant (les 3 plus récents)
	const featuredProjects = projects.slice(0, 3);
	
	// Compétences principales
	const mainSkills = skills.find(s => s.category === "Langages & Frameworks")?.items.slice(0, 8) || [];
</script>

<svelte:head>
	<title>{personalInfo.name} - {personalInfo.title}</title>
	<meta name="description" content={personalInfo.presentation} />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
				{personalInfo.name}
			</h1>
			<p class="text-xl md:text-2xl text-blue-600 font-medium mb-8">
				{personalInfo.title}
			</p>
			<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
				{personalInfo.presentation}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a 
					href="/projects" 
					class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
				>
					Voir mes projets
				</a>
				<a 
					href="/contact" 
					class="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
				>
					Me contacter
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Compétences principales -->
<section class="py-16 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Compétences principales</h2>
			<p class="text-lg text-gray-600">Technologies que je maîtrise et utilise régulièrement</p>
		</div>
		<SkillBadge skills={mainSkills} title="" />
		<div class="text-center mt-8">
			<a 
				href="/about" 
				class="text-blue-600 hover:text-blue-800 font-medium"
			>
				Voir toutes mes compétences →
			</a>
		</div>
	</div>
</section>

<!-- Objectif -->
<section class="py-16 bg-gray-50">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-gray-900 mb-6">Mon objectif</h2>
		<p class="text-xl text-gray-700 leading-relaxed">
			{personalInfo.objective}
		</p>
	</div>
</section>

<!-- Projets mis en avant -->
<section class="py-16 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Projets récents</h2>
			<p class="text-lg text-gray-600">Mes dernières réalisations techniques</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each featuredProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
		<div class="text-center mt-12">
			<a 
				href="/projects" 
				class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
			>
				Voir tous mes projets
			</a>
		</div>
	</div>
</section>

<!-- Contact rapide -->
<section class="py-16 bg-gray-900 text-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold mb-6">Prêt à collaborer ?</h2>
		<p class="text-xl text-gray-300 mb-8">
			Je suis actuellement à la recherche d'une alternance. 
			N'hésitez pas à me contacter pour discuter de vos projets !
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a 
				href="mailto:{personalInfo.email}" 
				class="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
			>
				Envoyer un email
			</a>
			<a 
				href={personalInfo.linkedin} 
				target="_blank" 
				rel="noopener noreferrer"
				class="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
			>
				LinkedIn
			</a>
		</div>
	</div>
</section>
