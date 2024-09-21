<script lang="ts">
  import 'tailwindcss/tailwind.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
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
