<script lang="ts">
  import Slide from '../Slide.svelte'; import Pos from '../Pos.svelte'; import Heading from '../Heading.svelte'; import ChamferBox from '../ChamferBox.svelte';
  import { site } from '$lib/config/site';
  let { data }: { data: any } = $props();
  const info = [['Email', site.contact.email], ['Phone', site.contact.phone], ['Address', site.contact.address]];
  const field = 'mt-[0.5cqw] w-full bg-paper p-[max(0.6rem,0.9cqw)] text-body normal-case outline-none focus:ring-1 focus:ring-accent';
</script>
<Slide>
  <Pos x={4.5} y={14} w={44}><Heading text={data.heading} size="lg" /></Pos>
  <Pos x={4.5} y={46} w={34}><p class="text-body leading-snug text-muted">{data.text}</p></Pos>
  <Pos x={4.5} y={62} w={42}>
    <dl class="border-t border-ink/30 text-body">
      {#each info as [k, v]}<div class="flex justify-between gap-4 border-b border-ink/30 py-[1cqw]"><dt class="uppercase text-muted">{k}</dt><dd>{v}</dd></div>{/each}
    </dl>
  </Pos>
  <Pos x={52} y={10} w={43.5} h={80}>
    <ChamferBox tone="soft" corner="tl" class="flex size-full p-[clamp(1rem,2.2cqw,2.75rem)]">
      <form action="mailto:{site.contact.email}" method="post" enctype="text/plain" class="flex w-full flex-col justify-between gap-4">
        {#each data.fields as f}
          <label class="block text-small uppercase">{f.label}
            {#if f.type === 'textarea'}<textarea name={f.name} rows="5" class={field}></textarea>{:else}<input type={f.type} name={f.name} class={field} />{/if}
          </label>
        {/each}
        <button class="self-start bg-accent px-[2cqw] py-[1cqw] text-small font-medium uppercase text-white max-lg:px-6 max-lg:py-3">{data.submit}</button>
      </form>
    </ChamferBox>
  </Pos>
</Slide>
