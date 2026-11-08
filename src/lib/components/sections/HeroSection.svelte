<script lang="ts">
  import Slide from '../Slide.svelte'; import Pos from '../Pos.svelte'; import Photo from '../Photo.svelte'; import Heading from '../Heading.svelte'; import StatCard from '../StatCard.svelte';
  let { data }: { data: any } = $props();
</script>
<Slide screen>
  <Pos x={4.5} y={10} w={91} h={40} class="max-lg:h-60"><Photo src={data.image} corner="none" /></Pos>
  <Pos x={4.5} y={54} w={58}><Heading text={data.title} size="lg" /></Pos>
  <Pos x={4.5} y={85} w={46}><p class="text-body leading-snug text-muted">{data.text}</p></Pos>
  <Pos x={66} y={50} w={29.5} h={36}><StatCard {...data.stat} corner="tl" /></Pos>
</Slide>
