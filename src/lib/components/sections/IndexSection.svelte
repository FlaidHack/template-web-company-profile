<script lang="ts">
  import Slide from '../Slide.svelte'; import Pos from '../Pos.svelte'; import Heading from '../Heading.svelte'; import Arrow from '../Arrow.svelte';
  let { data }: { data: any } = $props();
</script>
<Slide>
  <Pos x={4.5} y={22} w={40}><Heading text={data.title} size="lg" /></Pos>
  <Pos x={4.5} y={44} w={32}><p class="text-body leading-snug text-muted">{data.text}</p></Pos>
  <Pos x={5} y={80} w={4}><Arrow dir="sw" class="text-accent" /></Pos>
  <Pos x={49} y={20} w={45} h={70}>
    <ol class="flex h-full flex-col border-t border-ink/30">
      {#each data.items as it, i}
        <li class="flex-1 border-b border-ink/30">
          <a href={it.href} class="flex h-full items-center justify-between gap-4 max-lg:min-h-20 hover:text-accent">
            <div><p class="text-sub font-medium uppercase leading-tight">{it.title}</p><p class="mt-[0.4cqw] max-w-[70%] text-small leading-snug text-muted">{it.text}</p></div>
            <span class="text-h3 leading-none">{String(i + 1).padStart(2, '0')}</span>
          </a>
        </li>
      {/each}
    </ol>
  </Pos>
</Slide>
