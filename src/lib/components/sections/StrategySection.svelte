<script lang="ts">
  import Slide from '../Slide.svelte'; import ChamferBox from '../ChamferBox.svelte'; import Heading from '../Heading.svelte'; import Arrow from '../Arrow.svelte';
  let { data }: { data: any } = $props();
</script>
<Slide flow>
  <div class="flex flex-wrap items-start justify-between gap-x-10 gap-y-6">
    <div class="max-w-md">
      <p class="text-small uppercase">{data.intro.label}</p>
      <p class="mt-2 text-body leading-snug text-muted">{data.intro.text}</p>
    </div>
    <Heading text={data.title} bar="right" size="md" />
  </div>
  <div class="grid gap-4 md:grid-cols-3">
    {#each data.cards as c}
      <ChamferBox tone={c.tone} corner="tl" class="flex flex-col justify-between gap-10 p-[clamp(1.25rem,2cqw,2.25rem)]">
        <p class="text-body leading-snug opacity-90">{c.text}</p>
        <div><hr class="border-current opacity-30" /><p class="mt-3 text-body font-medium uppercase leading-tight">{c.title}</p></div>
      </ChamferBox>
    {/each}
  </div>
  <div class="flex justify-end"><Arrow dir="se" class="text-accent" /></div>
</Slide>
