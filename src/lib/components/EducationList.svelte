<script lang="ts">
  import type { EducationItem } from '$lib';
  import Card from '$lib/components/Card.svelte';
  import { reveal } from '$lib/actions/reveal';
  let { education = [] } = $props();
</script>

<section class="py-24">
  <div class="container-constrained">
    <div class="mb-14">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4">Parcours Académique</h2>
      <h3 class="text-3xl md:text-4xl font-bold tracking-tight">Formation</h3>
    </div>
    <div class="grid gap-8 md:grid-cols-2">
      {#each education as edu, i}
        <Card className="hover:shadow-lg transition-shadow">
          <div use:reveal={{ delay: i*90 }}>
            <h4 class="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">{edu.title}</h4>
            <div class="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{edu.school}</div>
            <div class="text-[11px] uppercase tracking-wide text-neutral-400 mb-2">
              {edu.start || ''}{#if edu.start && edu.end} – {/if}{edu.end || ''}
            </div>
            {#if edu.level}
              <div class="inline-block text-[11px] px-2 py-1 rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-400 border border-accent-500/30 font-medium">{edu.level}</div>
            {/if}
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
