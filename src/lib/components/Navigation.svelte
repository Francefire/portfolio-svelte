<script lang="ts">
	import { page } from '$app/stores';
	
	let isMenuOpen = $state(false);
	
	const navigation = [
		{ href: '/', label: 'Accueil' },
		{ href: '/about', label: 'À propos' },
		{ href: '/projects', label: 'Projets' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<header class="sticky top-0 z-50 border-b border-gray-200 bg-white dark:bg-black">
	<nav class="container-constrained">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-bold text-black dark:text-white hover:opacity-90 transition">
					Touhami
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="flex items-center gap-1">
					{#each navigation as item}
						<a 
							href={item.href}
							class="px-3 py-2 rounded-lg text-sm font-medium transition
								{$page.url.pathname === item.href 
									? 'text-white bg-blue-600' 
									: 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'}"
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
					class="inline-flex items-center justify-center p-2 rounded-lg border border-gray-300 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
					aria-label="Toggle menu"
				>
					<svg class="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
					</svg>
				</button>
			</div>
		</div>
		
		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="md:hidden border-t border-gray-200 bg-white dark:bg-black">
				<div class="px-3 py-3 space-y-1">
					{#each navigation as item}
						<a 
							href={item.href}
							onclick={() => isMenuOpen = false}
							class="block px-3 py-2 rounded-lg font-medium transition
								{$page.url.pathname === item.href 
									? 'text-white bg-blue-600' 
									: 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'}"
						>
							{item.label}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>
</header>