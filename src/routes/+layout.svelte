<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	const title = "Touhami Aglagal – Portfolio";
	const description = "Portfolio de Touhami Aglagal, concepteur & développeur d'applications full stack.";

	function toggleDark() {
		if (typeof document === 'undefined') return;
		document.documentElement.classList.toggle('dark');
		localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
	}

	if (typeof document !== 'undefined') {
		const stored = localStorage.getItem('theme');
		if (stored) {
			document.documentElement.classList.toggle('dark', stored === 'dark');
		} else {
			const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.documentElement.classList.toggle('dark', prefers);
		}
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			const explicit = localStorage.getItem('theme');
			if (!explicit) {
				document.documentElement.classList.toggle('dark', e.matches);
			}
		});
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#4f46e5" />
</svelte:head>

<div class="min-h-screen theme-bg text-neutral-800 dark:text-neutral-100 transition-colors antialiased">
	<header class="sticky top-0 z-40 border-b border-neutral-200/80 dark:border-neutral-700/60 bg-white/55 dark:bg-neutral-900/55 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55 dark:supports-[backdrop-filter]:bg-neutral-900/55">
		<div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
			<a href="/" class="font-semibold tracking-tight text-lg gradient-text">Touhami</a>
			<nav class="flex items-center gap-1 text-sm font-medium">
				{#each [
					{ href: '#experiences', label: 'Expériences' },
					{ href: '#skills', label: 'Compétences' },
					{ href: '#education', label: 'Formation' }
				] as link}
					<a href={link.href} class="relative px-3 py-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition">
						<span>{link.label}</span>
						<span class="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition"></span>
					</a>
				{/each}
				<button type="button" onclick={toggleDark} class="ml-2 inline-flex items-center gap-1 rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-100/60 dark:bg-neutral-800/60 px-3 py-1.5 text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">
					Thème
				</button>
			</nav>
		</div>
	</header>
  <main class="pb-24">{@render children?.()}</main>
  <footer class="py-12 border-t border-neutral-200 dark:border-neutral-700 text-center text-xs text-neutral-500 dark:text-neutral-400">
    © {new Date().getFullYear()} Touhami Aglagal. Tous droits réservés.
  </footer>
</div>
