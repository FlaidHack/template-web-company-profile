<script lang="ts">
  import { services } from '$lib/config/pages/services'; import { site } from '$lib/config/site';
  import ProductSection from '$lib/components/sections/ProductSection.svelte'; import StrategySection from '$lib/components/sections/StrategySection.svelte';
</script>
<svelte:head><title>{site.name} — {services.title}</title></svelte:head>
<ProductSection data={services.product} /><StrategySection data={services.strategy} />
