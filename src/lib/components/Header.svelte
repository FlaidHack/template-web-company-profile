<script lang="ts">
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { fly } from 'svelte/transition';
  import { site } from '$lib/config/site';
  import Arrow from './Arrow.svelte';

  let open = $state(false);
  const isActive = (href: string) => (href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href));

  afterNavigate(() => (open = false));

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') open = false;
  }
</script>

<svelte:window onkeydown={onKeydown} />

<header class="fixed inset-x-0 top-0 z-50">
  <div class="border-b border-ink/10 bg-bg/80 backdrop-blur-xl">
    <div class="mx-auto flex h-[var(--hdr)] max-w-[1920px] items-center justify-between gap-6 px-[var(--gap)]">
      <!-- Wordmark -->
      <a href="/" class="group flex shrink-0 items-center gap-3" aria-label="{site.name} — Home">
        <svg class="size-9 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" viewBox="0 0 64 64" aria-hidden="true">
          <rect width="64" height="64" fill="var(--c-ink)" />
          <path d="M64 46v18H46z" fill="var(--c-accent)" />
          <path d="M18 16h30v8H27v8h18v8H27v14h-9z" fill="var(--c-paper)" />
        </svg>
        <span class="flex flex-col gap-1 leading-none">
          <span class="text-[0.95rem] font-semibold uppercase tracking-[0.28em] text-ink">{site.name}</span>
          <span class="hidden text-[0.5rem] uppercase tracking-[0.24em] text-muted sm:block">{site.tagline}</span>
        </span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden h-full items-stretch lg:flex" aria-label="Primary">
        {#each site.nav as n}
          {@const active = isActive(n.href)}
          <a
            href={n.href}
            aria-current={active ? 'page' : undefined}
            class="group relative flex items-center px-[clamp(0.55rem,1vw,1.1rem)] text-[clamp(0.65rem,0.7vw,0.78rem)] uppercase tracking-[0.12em] transition-colors hover:text-accent {active ? 'text-accent' : ''}"
          >
            <span>{n.label}</span>
            <span
              class="pointer-events-none absolute inset-x-2 bottom-0 h-[2px] origin-left bg-accent transition-transform duration-300 {active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}"
            ></span>
          </a>
        {/each}
      </nav>

      <!-- Right side -->
      <div class="flex shrink-0 items-center gap-3">
        <p class="hidden text-right text-[0.55rem] uppercase leading-[1.6] tracking-[0.18em] text-muted xl:block">
          {site.meta.label}<br />{site.meta.date}
        </p>
        <span class="hidden h-7 w-px bg-ink/15 xl:block" aria-hidden="true"></span>
        <a
          href="/contact"
          class="cut-btn group hidden items-center gap-2 bg-ink px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent md:inline-flex"
        >
          Start a project
          <Arrow small class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <button
          type="button"
          class="cut-btn grid size-10 place-items-center border border-ink/20 text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onclick={() => (open = !open)}
        >
          <span class="relative block h-3 w-5" aria-hidden="true">
            <span
              class="absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 {open
                ? 'translate-y-[5.5px] rotate-45'
                : ''}"
            ></span>
            <span
              class="absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 {open
                ? '-translate-y-[5.5px] -rotate-45'
                : ''}"
            ></span>
          </span>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile panel -->
  {#if open}
    <div
      id="mobile-nav"
      class="border-b border-ink/10 bg-bg/95 shadow-[0_24px_48px_-24px_rgba(22,22,22,0.35)] backdrop-blur-xl lg:hidden"
      transition:fly={{ y: -10, duration: 180 }}
    >
      <nav class="mx-auto max-w-[1920px] px-[var(--gap)] py-6" aria-label="Mobile">
        <ol class="border-t border-ink/15">
          {#each site.nav as n}
            {@const active = isActive(n.href)}
            <li class="border-b border-ink/15">
              <a
                href={n.href}
                aria-current={active ? 'page' : undefined}
                onclick={() => (open = false)}
                class="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-accent {active ? 'text-accent' : ''}"
              >
                <span class="text-sub font-medium uppercase leading-none">{n.label}</span>
                <Arrow
                  small
                  class="shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          {/each}
        </ol>

        <div class="mt-6 flex flex-wrap items-end justify-between gap-4 text-small uppercase">
          <div class="text-muted">
            <a href="mailto:{site.contact.email}" class="block transition-colors hover:text-accent">{site.contact.email}</a>
            <a href="tel:{site.contact.phone.replace(/\s+/g, '')}" class="block transition-colors hover:text-accent">{site.contact.phone}</a>
          </div>
          <a
            href="/contact"
            onclick={() => (open = false)}
            class="inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-medium text-white transition-colors hover:bg-ink"
          >
            Book a consultation <Arrow small />
          </a>
        </div>
      </nav>
    </div>
  {/if}
</header>
