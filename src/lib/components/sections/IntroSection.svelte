<script lang="ts">
  import Slide from '../Slide.svelte'; import Pos from '../Pos.svelte'; import Photo from '../Photo.svelte'; import Heading from '../Heading.svelte'; import StatCard from '../StatCard.svelte';
  let { data }: { data: any } = $props();
</script>
<Slide>
  <Pos x={5.5} y={6.9} w={39} h={43} class="z-10"><StatCard {...data.year} corner="br" arrow="se" /></Pos>
  <Pos x={35.5} y={17.8} w={58} h={39.7} class="max-lg:h-60"><Photo src={data.image} corner="tl" /></Pos>
  <Pos x={6.8} y={64} w={37}><Heading text={data.title} size="md" /></Pos>
  <Pos x={49} y={68} w={43}><div class="space-y-[0.8cqw] text-body leading-snug text-muted">{#each data.paragraphs as p}<p>{p}</p>{/each}</div></Pos>
</Slide>
