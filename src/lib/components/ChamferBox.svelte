<script lang="ts">
  let { corner = 'tr', tone = 'soft', class: cls = '', children }: { corner?: 'tl' | 'tr' | 'bl' | 'br' | 'none'; tone?: 'soft' | 'accent' | 'paper' | 'none'; class?: string; children?: any } = $props();
  const tones = { soft: 'bg-soft', accent: 'bg-accent text-white', paper: 'bg-paper', none: '' };
</script>
<div class="cut-{corner} {tones[tone]} {cls}">{@render children?.()}</div>
