<script lang="ts">
  import { team } from '$lib/config/pages/team'; import { site } from '$lib/config/site';
  import TeamSection from '$lib/components/sections/TeamSection.svelte'; import CtaSection from '$lib/components/sections/CtaSection.svelte';
</script>
<svelte:head><title>{site.name} — {team.title}</title></svelte:head>
<TeamSection data={team} /><CtaSection data={site.cta} />
