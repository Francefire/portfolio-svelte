<script lang="ts">
  import type { ExperienceItem } from '$lib';
  export let experiences: ExperienceItem[] = [];
</script>

<section class="py-20 md:py-28 relative">
  <div class="container-constrained">
    <h2 class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-6">Parcours Professionnel</h2>
    <h3 class="text-3xl md:text-4xl font-bold tracking-tight mb-14">Expériences</h3>
    <ol class="relative ml-1">
      <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/40 via-neutral-300 dark:via-neutral-700 to-accent-500/40"></div>
      {#each experiences as exp}
        <li class="relative pl-8 pb-14 last:pb-0 group">
          <div class="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ring-4 ring-primary-500/20 group-hover:scale-110 transition-transform"></div>
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h4 class="font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">{exp.role}</h4>
            <span class="text-neutral-500 dark:text-neutral-400">@ {exp.company}</span>
            <span class="text-xs uppercase tracking-wide text-neutral-400">{exp.start} – {exp.end}</span>
            {#if exp.type}<span class="text-[10px] px-2 py-0.5 rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-400 border border-accent-500/30">{exp.type}</span>{/if}
          </div>
          {#if exp.bullets?.length}
            <ul class="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              {#each exp.bullets as b}
                <li class="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-primary-500/60 dark:before:bg-primary-400/70">{b}</li>
              {/each}
            </ul>
          {/if}
          {#if exp.stack?.length}
            <div class="mt-4 flex flex-wrap gap-2">
              {#each exp.stack as tech}
                <span class="px-2.5 py-1 rounded-md bg-neutral-200/70 dark:bg-neutral-700/60 text-neutral-700 dark:text-neutral-200 text-[11px] font-medium tracking-wide">{tech}</span>
              {/each}
            </div>
          {/if}
        </li>
      {/each}
    </ol>
  </div>
</section>
