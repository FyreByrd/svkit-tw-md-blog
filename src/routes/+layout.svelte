<script lang="ts">
  import 'tailwindcss/tailwind.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { afterUpdate } from 'svelte';
  import mermaid from 'mermaid';
  import { parseMermaid } from '$lib/mermaid';

  mermaid.initialize({
    theme: 'neutral',
    startOnLoad: false
  });

  // This was the only way to get mermaid to run globally
  // I tried onMount, but since it's the top-level layout it mounted before any markdown
  // I also tried using a rehype plugin, but MDSveX didn't play well with it
  afterUpdate(parseMermaid);
</script>

<Header />

<main class="prose p-5 dark:prose-invert w-full m-auto max-w-none">
  <slot />
</main>

<Footer />

<style lang="postcss">
  main {
    min-height: 80vh;
  }
  /* Global style so tables format okay-ish */
  main :global(table) {
    margin: auto;
    @apply w-full;
  }
  @media screen(md) {
    main :global(table) {
      @apply max-w-fit;
    }
  }
</style>
