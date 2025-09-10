<script lang="ts">
  import type { Profile } from '$lib';
  export let profile: Profile;
</script>

<section class="relative pt-24 md:pt-32 pb-12">
  <div class="container-constrained">
    <div class="max-w-2xl animate-fade-up">
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
        <span class="gradient-text block">{profile.name}</span>
        <span class="mt-2 block text-neutral-700 dark:text-neutral-200 text-2xl md:text-3xl font-medium">{profile.title}</span>
      </h1>
      <p class="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {profile.summary}
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} class="inline-flex items-center gap-2 rounded-md bg-primary-600 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400 text-white px-5 py-3 text-sm font-medium shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500">
          <span>Me contacter</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-600 bg-white/70 dark:bg-neutral-800/60 hover:bg-neutral-100 dark:hover:bg-neutral-700 px-5 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 transition">
          LinkedIn
        </a>
      </div>
      <div class="mt-10 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
        <span class="inline-flex items-center gap-1 rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1">{profile.location}</span>
        <span class="inline-flex items-center gap-1 rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1">{profile.phone}</span>
        <span class="inline-flex items-center gap-1 rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1">{profile.email}</span>
      </div>
    </div>
  </div>
  <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div class="absolute left-1/2 top-0 -translate-x-1/2 h-[700px] w-[1200px] [background:radial-gradient(circle_at_center,hsl(var(--color-primary-500)/0.15),transparent_70%)]"></div>
  </div>
</section>
