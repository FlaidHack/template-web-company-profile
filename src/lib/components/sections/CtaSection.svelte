<script lang="ts">
  import Slide from '../Slide.svelte'; import Pos from '../Pos.svelte'; import Photo from '../Photo.svelte'; import Heading from '../Heading.svelte'; import ChamferBox from '../ChamferBox.svelte'; import Arrow from '../Arrow.svelte';
  let { data }: { data: any } = $props();
</script>
<Slide>
  <Pos x={4.8} y={18.5} w={52}><Heading text={data.title} size="md" /></Pos>
  <Pos x={5.6} y={44} w={19}><p class="text-body leading-snug text-muted">{data.text}</p></Pos>
  <Pos x={88.5} y={20.5} w={4}><Arrow class="ml-auto text-accent" /></Pos>
  <Pos x={26} y={44} w={65.5} h={38} class="max-lg:h-60"><Photo src={data.image} corner="tl" /></Pos>
  <Pos x={64.5} y={56} w={28.7} h={24} class="z-10">
    <ChamferBox tone="accent" corner="tl" class="flex size-full flex-col justify-between gap-4 p-[clamp(1rem,1.8cqw,2.25rem)] max-lg:min-h-40">
      <p class="text-body leading-snug">{data.card.text}</p>
      <a href={data.card.href} class="inline-flex items-center gap-2 text-small font-medium uppercase">{data.card.label}<Arrow small /></a>
    </ChamferBox>
  </Pos>
</Slide>
