<script lang="ts">
  let { screen = false, flow = false, class: cls = '', children }: { screen?: boolean; flow?: boolean; class?: string; children?: any } = $props();
</script>
<section class="slide {screen ? 'slide-screen' : ''} {flow ? 'slide-flow' : ''} {cls}">{@render children?.()}</section>
