<script lang="ts">
	import { reveal } from 'svelte-reveal';
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
<section class="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900">
	<div class="container-constrained">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
				<span class="text-neutral-900 dark:text-neutral-100">
					Contact
				</span>
			</h1>
			<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
				Je suis actuellement à la recherche d'une alternance. N'hésitez pas à me contacter pour discuter de vos projets !
			</p>
		</div>
	</div>
</section>

<!-- Contact Info -->
<section class="py-20" use:reveal>
	<div class="container-constrained">
		<div class="grid lg:grid-cols-3 gap-8 mb-16">
			<!-- Email -->
			<a 
				href="mailto:{personalInfo.email}" 
				class="group bg-white dark:bg-neutral-900 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
			>
				<div class="text-4xl mb-4 group-hover:scale-110 transition-transform">📧</div>
				<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Email</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-3">Envoyez-moi un email</p>
				<p class="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-500 transition-colors">
					{personalInfo.email}
				</p>
			</a>

			<!-- Téléphone -->
			<a 
				href="tel:+33{personalInfo.phone.replace(/\s/g, '').substring(1)}" 
				class="group bg-white dark:bg-neutral-900 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
			>
				<div class="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
				<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Téléphone</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-3">Appelez-moi directement</p>
				<p class="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-500 transition-colors">
					{personalInfo.phone}
				</p>
			</a>

			<!-- Localisation -->
			<div class="bg-white dark:bg-neutral-900 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800">
				<div class="text-4xl mb-4">📍</div>
				<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Localisation</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-3">Basé à</p>
				<p class="text-neutral-700 dark:text-neutral-300 font-medium">
					{personalInfo.location}
				</p>
			</div>
		</div>
		
		<!-- Disponibilité -->
		<div class="max-w-2xl mx-auto">
			<div class="rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-center">
					<div class="text-3xl mb-4">🎆</div>
					<h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Disponibilité</h3>
					<p class="text-neutral-700 dark:text-neutral-300">
						Je suis actuellement <strong>disponible</strong> pour une alternance en Concepteur Développeur d'Applications. 
						N'hésitez pas à me contacter pour discuter de vos besoins !
					</p>
			</div>
		</div>
	</div>
</section>

<section class="py-20 bg-neutral-50 dark:bg-neutral-900" use:reveal>
	<div class="container-constrained">
		<div class="grid lg:grid-cols-2 gap-12">
			
			<!-- Formulaire de contact -->
			<div>
				<h2 class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-8">
					Envoyez-moi un message
				</h2>
				
				{#if submitMessage}
					<div class="mb-6 p-4 bg-accent-50 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-700 rounded-xl">
						<p class="text-accent-800 dark:text-accent-200">{submitMessage}</p>
					</div>
				{/if}
				
				<form onsubmit={handleSubmit} class="bg-white dark:bg-neutral-900 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 space-y-6">
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
								Nom complet *
							</label>
							<input
								id="name"
								type="text"
								bind:value={name}
								required
								class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
								placeholder="Votre nom complet"
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
								Email *
							</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								required
								class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
								placeholder="votre@email.com"
							/>
						</div>
					</div>
					
					<div>
						<label for="subject" class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
							Sujet *
						</label>
						<input
							id="subject"
							type="text"
							bind:value={subject}
							required
							class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
							placeholder="Sujet de votre message"
						/>
					</div>
					
					<div>
						<label for="message" class="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
							Message *
						</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="6"
							class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
							placeholder="Décrivez votre projet ou votre demande..."
						></textarea>
					</div>
					
					<div class="flex justify-center">
						<button
							type="submit"
							disabled={isSubmitting}
							class="inline-flex items-center gap-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{#if isSubmitting}
								<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
								Envoi en cours...
							{:else}
								<span class="text-xl">📧</span>
								Envoyer le message
							{/if}
						</button>
					</div>
					
					<p class="text-sm text-neutral-500 dark:text-neutral-400 text-center">
						* Champs obligatoires. Ce formulaire ouvrira votre client email par défaut.
					</p>
				</form>
			</div>
			
			<!-- FAQ ou Infos supplémentaires -->
			<div>
				<h2 class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-8">
					Questions fréquentes
				</h2>
				
				<div class="space-y-6">
					<div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
						<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
							⚡ Délai de réponse
						</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Je réponds généralement dans les 24 heures suivant la réception de votre message.
						</p>
					</div>
					
					<div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
						<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
							💼 Types de projets
						</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Sites web, applications, e-commerce, refonte, optimisation ou consultation technique.
						</p>
					</div>
					
					<div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
						<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
							🤝 Collaboration
						</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Disponible pour des missions freelance, contrats ou collaborations ponctuelles.
						</p>
					</div>
					
					<div class="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
						<h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
							🎯 Devis gratuit
						</h3>
						<p class="text-neutral-600 dark:text-neutral-400">
							Évaluation et devis gratuits pour tout projet de développement web.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>