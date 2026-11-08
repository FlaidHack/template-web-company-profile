<script lang="ts">
  import ChamferBox from './ChamferBox.svelte';
  import Arrow from './Arrow.svelte';
  let { tone = 'accent', corner = 'tl', label = '', value, text = '', arrow = 'ne', class: cls = '' }: { tone?: 'soft' | 'accent'; corner?: 'tl' | 'tr' | 'bl' | 'br'; label?: string; value: string; text?: string; arrow?: 'ne' | 'se' | 'sw' | ''; class?: string } = $props();
</script>
<ChamferBox {tone} {corner} class="relative flex size-full flex-col justify-between gap-4 p-[clamp(1rem,2cqw,2.5rem)] max-lg:min-h-48 {cls}">
  <div>
    {#if label}<p class="max-w-[60%] text-small uppercase leading-tight">{label}</p>{/if}
    <p class="mt-[0.6cqw] text-stat font-medium leading-none tracking-tight">{value}</p>
  </div>
  {#if text}<p class="max-w-[75%] text-body leading-snug opacity-90">{text}</p>{/if}
  {#if arrow}<Arrow dir={arrow} class="absolute right-[clamp(1rem,2cqw,2.5rem)] top-[clamp(1rem,2cqw,2.5rem)]" />{/if}
</ChamferBox>
