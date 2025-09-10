<script lang="ts">
  export let className = '';
</script>
<div class={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
  <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"></div>
  <div class="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-accent-500/10 blur-3xl"></div>
</div>
