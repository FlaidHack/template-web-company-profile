<script lang="ts">
  import Slide from '../Slide.svelte'; import Pos from '../Pos.svelte'; import Photo from '../Photo.svelte'; import Heading from '../Heading.svelte'; import Arrow from '../Arrow.svelte';
  let { data }: { data: any } = $props();
  const members = $derived(data.members);
  const first = $derived(members[0]);
  const rest = $derived(members.slice(1));
  const r = $derived(rest.length);
  const w = $derived(Math.min(26.5, (92 - 36.8 - (r - 1) * 2.2) / r));
</script>
{#snippet name(m: any)}<p class="text-body font-medium leading-tight">{m.name}</p><p class="text-small text-muted">{m.role}</p>{/snippet}
<Slide>
  <Pos x={36.5} y={20} w={40}><Heading text={data.heading} size="md" /></Pos>
  <Pos x={88} y={18} w={4}><Arrow class="text-accent" /></Pos>
  <Pos x={7.4} y={15.5} w={27} h={62} class="max-lg:h-72"><Photo src={first.image} alt={first.name} corner="tr" /></Pos>
  <Pos x={7.4} y={79.5} w={27}>{@render name(first)}</Pos>
  {#each rest as m, i}
    <Pos x={36.8 + i * (w + 2.2)} y={40.8} w={w} h={36.8} class="max-lg:h-56"><Photo src={m.image} alt={m.name} corner="tr" /></Pos>
    <Pos x={36.8 + i * (w + 2.2)} y={79.5} w={w}>{@render name(m)}</Pos>
  {/each}
</Slide>
