<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import { theme } from '$lib/config/theme';
  import { site } from '$lib/config/site';
  let { children } = $props();
  const c = theme.colors;
  const vars = `--c-bg:${c.bg};--c-paper:${c.paper};--c-accent:${c.accent};--c-soft:${c.soft};--c-ink:${c.ink};--c-muted:${c.muted};--f-sans:${theme.font.family};--cut:${theme.cut};--img-filter:${theme.grayscaleImages ? 'grayscale(1) contrast(1.05)' : 'none'}`;
</script>
<svelte:head><link rel="stylesheet" href={theme.font.url} /><meta name="description" content={site.description} /></svelte:head>
<div class="min-h-screen bg-bg font-sans text-ink" style={vars}>
  <a href="#main" class="sr-only z-[60] bg-ink text-small uppercase text-paper focus:not-sr-only focus:fixed focus:left-[var(--gap)] focus:top-[var(--gap)] focus:px-4 focus:py-2 focus:ring-2 focus:ring-accent">Skip to content</a>
  <Header />
  <main id="main" class="mx-auto max-w-[1920px] space-y-[var(--gap)] px-[var(--gap)] pt-[calc(var(--hdr)+var(--gap))]">{@render children()}</main>
  <footer class="mx-auto max-w-[1920px] p-[var(--gap)] text-small text-muted">{site.footer}</footer>
</div>
