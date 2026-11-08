<script lang="ts">
  let { text, bar = 'left', size = 'md', class: cls = '' }: { text: string; bar?: 'left' | 'right'; size?: 'md' | 'lg'; class?: string } = $props();
  const sizes = { md: 'text-h2', lg: 'text-h1' };
</script>
<h2 class="whitespace-pre-line font-medium uppercase leading-[1.05] tracking-tight {sizes[size]} {bar === 'right' ? 'bar-r text-right' : 'bar-l'} {cls}">{text}</h2>
