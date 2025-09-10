<script lang="ts">
	import { personalInfo } from '$lib';
	
	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let submitMessage = $state('');
	
	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		isSubmitting = true;
		submitMessage = '';
		
		// Simulation d'envoi (pour l'instant, on utilise mailto:)
		const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || 'Contact depuis le portfolio')}&body=${encodeURIComponent(
			`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
		)}`;
		
		window.location.href = mailtoLink;
		
		setTimeout(() => {
			isSubmitting = false;
			submitMessage = 'Votre client email a été ouvert. Merci pour votre message !';
			// Réinitialiser le formulaire
			name = '';
			email = '';
			subject = '';
			message = '';
		}, 1000);
	};
</script>

<svelte:head>
	<title>Contact - {personalInfo.name}</title>
	<meta name="description" content="Contactez {personalInfo.name} pour vos projets et opportunités" />
</svelte:head>

<!-- Header -->
<section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contactez-moi</h1>
			<p class="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
				Je suis actuellement à la recherche d'une alternance. 
				N'hésitez pas à me contacter pour discuter de vos projets !
			</p>
		</div>
	</div>
</section>

<section class="py-16 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Informations de contact -->
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-8">Informations de contact</h2>
				<div class="space-y-6">
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-semibold text-gray-900">Email</h3>
							<a href="mailto:{personalInfo.email}" class="text-blue-600 hover:text-blue-800 transition-colors">
								{personalInfo.email}
							</a>
						</div>
					</div>
					
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-semibold text-gray-900">Téléphone</h3>
							<a href="tel:+33{personalInfo.phone.replace(/\s/g, '').substring(1)}" class="text-blue-600 hover:text-blue-800 transition-colors">
								{personalInfo.phone}
							</a>
						</div>
					</div>
					
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-semibold text-gray-900">Localisation</h3>
							<p class="text-gray-600">{personalInfo.location}</p>
						</div>
					</div>
					
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
							<svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-semibold text-gray-900">LinkedIn</h3>
							<a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 transition-colors">
								Profil LinkedIn
							</a>
						</div>
					</div>
				</div>
				
				<!-- Disponibilité -->
				<div class="mt-8 p-6 bg-green-50 rounded-lg">
					<h3 class="text-lg font-semibold text-green-900 mb-2">Disponibilité</h3>
					<p class="text-green-800">
						Je suis actuellement <strong>disponible</strong> pour une alternance en Concepteur Développeur d'Applications. 
						N'hésitez pas à me contacter pour discuter de vos besoins !
					</p>
				</div>
			</div>
			
			<!-- Formulaire de contact -->
			<div>
				<h2 class="text-3xl font-bold text-gray-900 mb-8">Envoyez-moi un message</h2>
				
				{#if submitMessage}
					<div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
						<p class="text-green-800">{submitMessage}</p>
					</div>
				{/if}
				
				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
								Nom *
							</label>
							<input
								id="name"
								type="text"
								bind:value={name}
								required
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder="Votre nom complet"
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
								Email *
							</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								required
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								placeholder="votre@email.com"
							/>
						</div>
					</div>
					
					<div>
						<label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
							Sujet
						</label>
						<input
							id="subject"
							type="text"
							bind:value={subject}
							class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							placeholder="Sujet de votre message"
						/>
					</div>
					
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
							Message *
						</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="6"
							class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
							placeholder="Décrivez votre projet ou votre demande..."
						></textarea>
					</div>
					
					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
					</button>
				</form>
				
				<p class="mt-4 text-sm text-gray-600">
					* Champs obligatoires. Ce formulaire ouvrira votre client email par défaut.
				</p>
			</div>
		</div>
	</div>
</section>