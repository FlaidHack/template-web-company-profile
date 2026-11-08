<script lang="ts">
  import { contact } from '$lib/config/pages/contact'; import { site } from '$lib/config/site';
  import ContactSection from '$lib/components/sections/ContactSection.svelte';
</script>
<svelte:head><title>{site.name} — {contact.title}</title></svelte:head>
<ContactSection data={contact} />
