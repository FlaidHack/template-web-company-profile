<script lang="ts">
  let { dir = 'ne', small = false, class: cls = '' }: { dir?: 'ne' | 'se' | 'sw'; small?: boolean; class?: string } = $props();
  const rot = { ne: 0, se: 90, sw: 180 };
</script>
<svg class="block {small ? 'size-4' : 'size-[var(--icon)]'} {cls}" style="transform:rotate({rot[dir]}deg)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
