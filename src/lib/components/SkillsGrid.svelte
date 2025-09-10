<script lang="ts">
  import type { SkillCategory } from '$lib';
  import Card from '$lib/components/Card.svelte';
  import { reveal } from '$lib/actions/reveal';
  let { skills = [] } = $props();
</script>

<section class="py-24">
  <div class="container-constrained">
    <div class="mb-14">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4">Stack & Outils</h2>
      <h3 class="text-3xl md:text-4xl font-bold tracking-tight">Compétences</h3>
    </div>
    <div class="grid gap-8 md:grid-cols-2">
      {#each skills as cat, i}
        <Card className="hover:shadow-lg transition-shadow">
          <div use:reveal={{ delay: i*80 }}>
            <h4 class="font-medium text-neutral-800 dark:text-neutral-100 mb-4 tracking-wide text-sm uppercase">{cat.label}</h4>
            <ul class="flex flex-wrap gap-2">
              {#each cat.items as item}
                <li class="px-2.5 py-1 rounded-full bg-neutral-200/60 dark:bg-neutral-700/60 text-neutral-700 dark:text-neutral-100 text-[11px] font-medium tracking-wide">{item}</li>
              {/each}
            </ul>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
