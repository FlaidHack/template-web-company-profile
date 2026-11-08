<script lang="ts">
  // Posisi elemen dalam slide, satuan persen dari lebar/tinggi slide (di desktop).
  let { x, y, w, h = null, class: cls = '', children }: { x: number; y: number; w: number; h?: number | null; class?: string; children?: any } = $props();
</script>
<div class="pos {cls}" style="--x:{x}%;--y:{y}%;--w:{w}%;{h === null ? '' : '--h:' + h + '%'}">{@render children?.()}</div>
