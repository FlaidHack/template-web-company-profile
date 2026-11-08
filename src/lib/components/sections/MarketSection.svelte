<script lang="ts">
  import Slide from '../Slide.svelte'; import Pos from '../Pos.svelte'; import ChamferBox from '../ChamferBox.svelte'; import StatCard from '../StatCard.svelte';
  let { data }: { data: any } = $props();
</script>
<Slide>
  <Pos x={6} y={19.5} w={40}><h2 class="text-h2 font-medium uppercase leading-none tracking-tight">{data.eyebrow}</h2></Pos>
  <Pos x={89} y={19.5} w={5}><span class="block text-right text-h2 leading-none text-accent">»</span></Pos>
  <Pos x={6} y={34} w={32.6} h={37}><StatCard {...data.stat} corner="tr" /></Pos>
  <Pos x={40.3} y={34} w={53.9} h={37}>
    <ChamferBox tone="soft" corner="tr" class="flex size-full flex-col justify-between gap-6 p-[clamp(1rem,2cqw,2.5rem)] max-lg:min-h-48">
      <p class="text-right text-small uppercase">{data.audience.label}</p>
      <div class="grid gap-6 sm:grid-cols-2">
        {#each data.audience.items as it}<div><p class="text-sub font-medium uppercase leading-tight">{it.title}</p><p class="mt-[0.6cqw] max-w-[85%] text-body leading-snug text-muted">{it.text}</p></div>{/each}
      </div>
    </ChamferBox>
  </Pos>
  <Pos x={6} y={77} w={20}><p class="whitespace-pre-line text-small uppercase leading-tight">{data.small}</p></Pos>
  <Pos x={40} y={74.5} w={54}><h2 class="text-right text-h1 font-medium uppercase leading-none tracking-tight">{data.title}</h2></Pos>
</Slide>
