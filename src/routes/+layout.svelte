<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Navigation, Footer } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="utf-8" />
	<meta name="author" content="Touhami AGLAGAL" />
	<meta name="keywords" content="Touhami AGLAGAL, développeur, full stack, alternance, React, Next.js, Node.js, Java, PHP, portfolio" />
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="fr_FR" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navigation />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<Footer />
</div>
