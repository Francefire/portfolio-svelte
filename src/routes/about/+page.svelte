<script lang="ts">
	import { personalInfo, experiences, education, skills, languages, softSkills, SkillBadge } from '$lib';
</script>

<svelte:head>
	<title>À propos - {personalInfo.name}</title>
	<meta name="description" content="Parcours, expériences et compétences de {personalInfo.name}" />
</svelte:head>

<!-- Header -->
<section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">À propos de moi</h1>
			<p class="text-xl text-gray-700 leading-relaxed">
				Découvrez mon parcours, mes expériences et mes compétences
			</p>
		</div>
	</div>
</section>

<!-- Présentation -->
<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div class="lg:col-span-2">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Présentation</h2>
				<p class="text-lg text-gray-700 leading-relaxed mb-6">
					{personalInfo.presentation}
				</p>
				<div class="bg-blue-50 p-6 rounded-lg">
					<h3 class="text-lg font-semibold text-blue-900 mb-2">Mon objectif</h3>
					<p class="text-blue-800">
						{personalInfo.objective}
					</p>
				</div>
			</div>
			<div class="lg:col-span-1">
				<div class="bg-gray-50 p-6 rounded-lg">
					<h3 class="text-lg font-semibold text-gray-900 mb-4">Informations</h3>
					<div class="space-y-3 text-sm">
						<div>
							<span class="font-medium text-gray-900">📅 Né le:</span> 
							<span class="text-gray-700">{personalInfo.birthDate}</span>
						</div>
						<div>
							<span class="font-medium text-gray-900">📍 Localisation:</span> 
							<span class="text-gray-700">{personalInfo.location}</span>
						</div>
						<div>
							<span class="font-medium text-gray-900">📧 Email:</span> 
							<a href="mailto:{personalInfo.email}" class="text-blue-600 hover:text-blue-800">
								{personalInfo.email}
							</a>
						</div>
						<div>
							<span class="font-medium text-gray-900">📞 Téléphone:</span> 
							<a href="tel:+33{personalInfo.phone.replace(/\s/g, '').substring(1)}" class="text-blue-600 hover:text-blue-800">
								{personalInfo.phone}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Expériences professionnelles -->
<section class="py-16 bg-gray-50">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Expériences professionnelles</h2>
		<div class="space-y-8">
			{#each experiences as experience}
				<article class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
					<div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
						<div>
							<h3 class="text-xl font-semibold text-gray-900">{experience.role}</h3>
							<p class="text-lg text-blue-600 font-medium">{experience.company}</p>
							{#if experience.location}
								<p class="text-sm text-gray-600">{experience.location}</p>
							{/if}
						</div>
						<span class="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
							{experience.period}
						</span>
					</div>
					<ul class="space-y-2 mb-4">
						{#each experience.description as desc}
							<li class="text-gray-700 flex">
								<span class="text-blue-600 mr-2">•</span>
								{desc}
							</li>
						{/each}
					</ul>
					{#if experience.technologies}
						<div class="flex flex-wrap gap-2">
							{#each experience.technologies as tech}
								<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
									{tech}
								</span>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
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