<script lang="ts">
	import { personalInfo, projects, skills, ProjectCard, SkillBadge } from '$lib';
	import { reveal } from 'svelte-reveal';
	
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
<section class="py-24 md:py-32">
	<div class="container-constrained">
		<div class="text-center max-w-4xl mx-auto animate-fade-up">
			<h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
				<span class="block text-black dark:text-white">{personalInfo.name}</span>
			</h1>
			<p class="text-xl md:text-2xl font-medium text-black dark:text-white mb-8">
				{personalInfo.title}
			</p>
			<p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
				{personalInfo.presentation}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a 
					href="/projects" 
					class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
				>
					Voir mes projets
				</a>
				<a 
					href="mailto:{personalInfo.email}" 
					class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-black px-8 py-4 font-semibold transition"
				>
					Me contacter
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Compétences principales -->
<section class="py-20 md:py-28">
	<div class="container-constrained">
		<div class="text-center mb-16" use:reveal>
			<h2 class="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">Stack Technique</h2>
			<h3 class="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-black dark:text-white">Compétences principales</h3>
			<p class="text-lg text-gray-700 dark:text-gray-300">Technologies que je maîtrise et utilise régulièrement</p>
		</div>
		<SkillBadge skills={mainSkills} title="" />
		<div class="text-center mt-12 text-neutral-900 dark:text-neutral-100" use:reveal>
			<a 
				href="/about" 
				class="text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition"
			>
				Voir toutes mes compétences →
			</a>
		</div>
	</div>
</section>

<!-- Objectif -->
<section class="py-20 bg-white dark:bg-black">
	<div class="container-constrained text-center">
		<div use:reveal>
			<h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-black dark:text-white">Mon objectif</h2>
			<p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
				{personalInfo.objective}
			</p>
		</div>
	</div>
</section>

<!-- Projets mis en avant -->
<section class="py-20 md:py-28">
	<div class="container-constrained">
		<div class="text-center mb-16" use:reveal>
			<h2 class="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">Portfolio</h2>
			<h3 class="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-black dark:text-white">Projets récents</h3>
			<p class="text-lg text-gray-700 dark:text-gray-300">Mes dernières réalisations techniques</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each featuredProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
		<div class="text-center mt-16" use:reveal>
			<a 
				href="/projects" 
				class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400 text-white px-8 py-4 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
			>
				Voir tous mes projets
			</a>
		</div>
	</div>
</section>

<!-- Contact rapide -->

<section class="py-20 md:py-28 bg-black">
	<div class="container-constrained text-center">
		<div use:reveal>
			<h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">Prêt à collaborer ?</h2>
			<p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
				Je suis actuellement à la recherche d'une alternance. 
				N'hésitez pas à me contacter pour discuter de vos projets !
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a 
					href="mailto:{personalInfo.email}" 
					class="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition"
				>
					Envoyer un email
				</a>
				<a 
					href={personalInfo.linkedin} 
					target="_blank" 
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 rounded-lg border border-white text-white px-8 py-4 font-semibold hover:bg-gray-800 transition"
				>
					LinkedIn
				</a>
			</div>
		</div>
	</div>
</section>