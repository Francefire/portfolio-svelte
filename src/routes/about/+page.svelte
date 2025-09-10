<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import { personalInfo, experiences, education, skills, languages, softSkills, SkillBadge } from '$lib';
</script>

<svelte:head>
	<title>À propos - {personalInfo.name}</title>
	<meta name="description" content="Parcours, expériences et compétences de {personalInfo.name}" />
</svelte:head>

<!-- Header -->
<section class="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900">
	<div class="container-constrained">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
				<span class="text-neutral-900 dark:text-neutral-100">
					À propos
				</span>
			</h1>
			<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
				Découvrez mon parcours, mes expériences et mes compétences
			</p>
		</div>
	</div>
</section>

<!-- Présentation -->
<section class="py-20" use:reveal>
	<div class="container-constrained">
		<div class="grid lg:grid-cols-3 gap-12">
			<div class="lg:col-span-2">
				<h2 class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
					Présentation
				</h2>
				<div class="prose prose-lg prose-neutral dark:prose-invert max-w-none mb-8">
					<p class="text-lg leading-relaxed">
						{personalInfo.presentation}
					</p>
				</div>
				<div class="rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
					<div>
						<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Mon objectif</h3>
						<p class="text-neutral-700 dark:text-neutral-300">
							{personalInfo.objective}
						</p>
					</div>
				</div>
			</div>
			<div class="lg:col-span-1">
				<div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 sticky top-8">
					<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Informations</h3>
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<span class="text-primary-600 dark:text-primary-400 text-lg">📅</span>
							<div>
								<span class="text-sm text-neutral-500 dark:text-neutral-400 block">Né le</span>
								<span class="text-neutral-700 dark:text-neutral-300 font-medium">{personalInfo.birthDate}</span>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-primary-600 dark:text-primary-400 text-lg">📍</span>
							<div>
								<span class="text-sm text-neutral-500 dark:text-neutral-400 block">Localisation</span>
								<span class="text-neutral-700 dark:text-neutral-300 font-medium">{personalInfo.location}</span>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-primary-600 dark:text-primary-400 text-lg">📧</span>
							<div>
								<span class="text-sm text-neutral-500 dark:text-neutral-400 block">Email</span>
								<a href="mailto:{personalInfo.email}" class="text-primary-600 dark:text-primary-400 hover:text-primary-500 transition font-medium">
									{personalInfo.email}
								</a>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-primary-600 dark:text-primary-400 text-lg">📞</span>
							<div>
								<span class="text-sm text-neutral-500 dark:text-neutral-400 block">Téléphone</span>
								<a href="tel:+33{personalInfo.phone.replace(/\s/g, '').substring(1)}" class="text-primary-600 dark:text-primary-400 hover:text-primary-500 transition font-medium">
									{personalInfo.phone}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Expériences professionnelles -->
<section class="py-20 bg-neutral-50 dark:bg-neutral-900" use:reveal>
	<div class="container-constrained">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
				Expériences professionnelles
			</h2>
			<p class="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
				Mon parcours professionnel et les projets marquants que j'ai réalisés.
			</p>
		</div>
		<div class="relative">
			<!-- Timeline line -->
			<div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 transform md:-translate-x-0.5"></div>
			
			<div class="space-y-12">
				{#each experiences as experience, index}
					<div class="relative flex flex-col md:flex-row md:items-center {index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
						<!-- Timeline dot -->
						<div class="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-neutral-900 transform -translate-x-2 md:-translate-x-2 z-10"></div>
						
						<!-- Content -->
						<div class="ml-20 md:ml-0 md:w-1/2 {index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}">
							<article class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
								<div class="flex flex-wrap items-center gap-2 mb-4">
									<span class="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
										{experience.period}
									</span>
									{#if experience.location}
										<span class="text-sm text-neutral-500 dark:text-neutral-400">
											📍 {experience.location}
										</span>
									{/if}
								</div>
								<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
									{experience.role}
								</h3>
								<p class="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">
									{experience.company}
								</p>
								<ul class="space-y-2 mb-6">
									{#each experience.description as desc}
										<li class="text-neutral-600 dark:text-neutral-400 flex items-start">
											<span class="text-primary-500 mr-3 mt-1 text-sm">→</span>
											{desc}
										</li>
									{/each}
								</ul>
								{#if experience.technologies}
									<div class="flex flex-wrap gap-2">
										{#each experience.technologies as tech}
											<span class="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded">
												{tech}
											</span>
										{/each}
									</div>
								{/if}
							</article>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Compétences détaillées -->
<section class="py-16 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Compétences techniques</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each skills as skillCategory}
				<div class="bg-gray-50 p-6 rounded-lg">
					<SkillBadge skills={skillCategory.items} title={skillCategory.category} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Soft Skills et Langues -->
<section class="py-16 bg-gray-50">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Soft Skills -->
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Atouts</h2>
				<ul class="space-y-3">
					{#each softSkills as skill}
						<li class="flex items-start">
							<span class="text-green-600 mr-3 mt-1">✓</span>
							<span class="text-gray-700">{skill}</span>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Langues -->
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Langues</h2>
				<div class="space-y-4">
					{#each languages as lang}
						<div class="flex justify-between items-center p-4 bg-white rounded-lg">
							<span class="font-medium text-gray-900">{lang.language}</span>
							<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
								{lang.level}
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Formation -->
<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Formation</h2>
		<div class="space-y-6">
			{#each education as edu}
				<article class="bg-gray-50 rounded-lg p-6 border-l-4 border-green-600">
					<div class="flex flex-col md:flex-row md:justify-between md:items-start">
						<div>
							<h3 class="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
							<p class="text-lg text-green-600 font-medium mb-1">{edu.institution}</p>
							{#if edu.description}
								<p class="text-gray-600 text-sm">{edu.description}</p>
							{/if}
						</div>
						<span class="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full mt-2 md:mt-0">
							{edu.year}
						</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>