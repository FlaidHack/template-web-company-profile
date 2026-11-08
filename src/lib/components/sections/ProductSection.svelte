<script lang="ts">
  import Slide from '../Slide.svelte'; import Photo from '../Photo.svelte'; import Heading from '../Heading.svelte'; import Arrow from '../Arrow.svelte';
  let { data }: { data: any } = $props();
</script>
<Slide flow>
  <div class="grid items-start gap-6 lg:grid-cols-[1fr_1.75fr]">
    <Heading text={data.title} size="md" />
    <div class="relative h-56 md:h-[clamp(12rem,18cqw,20rem)]">
      <Photo src={data.image} corner="br" />
      <div class="absolute right-[clamp(1rem,1.6cqw,1.75rem)] top-[clamp(1rem,1.6cqw,1.75rem)] grid aspect-square w-[clamp(3.5rem,6cqw,6rem)] place-items-center bg-accent text-white"><Arrow /></div>
    </div>
  </div>
  <div class="grid gap-6 md:grid-cols-[1fr_2fr]">
    <p class="text-small uppercase">{data.label}</p>
    <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      {#each data.items as it, i}
        <div class="border-l border-ink/40 pl-[clamp(1rem,1.5cqw,1.75rem)]">
          <p class="text-h3 leading-none">{String(i + 1).padStart(2, '0')}</p>
          <p class="mt-4 text-sub font-medium uppercase leading-tight">{it.title}</p>
          <p class="mt-2 text-body leading-snug text-muted">{it.text}</p>
        </div>
      {/each}
    </div>
  </div>
</Slide>
