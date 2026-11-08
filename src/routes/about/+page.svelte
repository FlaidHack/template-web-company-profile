<script lang="ts">
  import { about } from '$lib/config/pages/about'; import { site } from '$lib/config/site';
  import IntroSection from '$lib/components/sections/IntroSection.svelte'; import MarketSection from '$lib/components/sections/MarketSection.svelte';
</script>
<svelte:head><title>{site.name} — {about.title}</title></svelte:head>
<IntroSection data={about.intro} /><MarketSection data={about.market} />
