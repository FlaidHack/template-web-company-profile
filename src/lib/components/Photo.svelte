<script lang="ts">
  let { src, alt = '', corner = 'tr', class: cls = '' }: { src: string; alt?: string; corner?: 'tl' | 'tr' | 'bl' | 'br' | 'none'; class?: string } = $props();
</script>
<div class="ph cut-{corner} size-full bg-ink {cls}"><img {src} {alt} loading="lazy" /></div>
