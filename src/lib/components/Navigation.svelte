<script lang="ts">
	import { page } from '$app/stores';
	
	let isMenuOpen = $state(false);
	
	const navigation = [
		{ href: '/', label: 'Accueil' },
		{ href: '/about', label: 'À propos' },
		{ href: '/projects', label: 'Projets' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/cv', label: 'CV (PDF)' }
	];
</script>

<header class="bg-white shadow-sm border-b sticky top-0 z-50">
	<nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
					Touhami AGLAGAL
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					{#each navigation as item}
						<a 
							href={item.href}
							class="px-3 py-2 rounded-md text-sm font-medium transition-colors
								{$page.url.pathname === item.href 
									? 'bg-blue-100 text-blue-700' 
									: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}"
						>
							{item.label}
						</a>
					{/each}
				</div>
			</div>
			
			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={() => isMenuOpen = !isMenuOpen}
					class="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
					aria-label="Toggle menu"
				>
					<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
					</svg>
				</button>
			</div>
		</div>
		
		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="md:hidden">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
					{#each navigation as item}
						<a 
							href={item.href}
							onclick={() => isMenuOpen = false}
							class="block px-3 py-2 rounded-md text-base font-medium transition-colors
								{$page.url.pathname === item.href 
									? 'bg-blue-100 text-blue-700' 
									: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}"
						>
							{item.label}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>
</header>