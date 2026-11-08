<script lang="ts">
  import { home } from '$lib/config/pages/home'; import { site } from '$lib/config/site';
  import HeroSection from '$lib/components/sections/HeroSection.svelte'; import IndexSection from '$lib/components/sections/IndexSection.svelte'; import CtaSection from '$lib/components/sections/CtaSection.svelte';
</script>
<svelte:head><title>{site.name} — {home.title}</title></svelte:head>
<HeroSection data={home.hero} /><IndexSection data={home.index} /><CtaSection data={site.cta} />
