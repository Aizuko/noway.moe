<script>
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/global.sass';
  import '../app.sass';
</script>

<layout>
  <main>
    <slot />
  </main>

  <Footer />
</layout>


<!--
<footer>
  <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
-->

<style lang="sass">
  layout
    margin: 0
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: space-between

    main
      padding: 1em
</style>

<!--
<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
-->
