<script>
  export let title = "Untitled";
</script>

<section id="outer-bubble">
  <div id="inner-bubble">
    <h2>{ title }</h2>
    <slot />
  </div>
</section>

<style lang="sass">
  #outer-bubble
    margin: 1em
    //width: 100%
    background-color: var(--dark)
    //box-shadow: 0 0.05em 0.4em var(--dark-accent)
    border: 1px solid var(--dark-accent)
    border-radius: 1em

    #inner-bubble
      margin: 1em

      h2
        font-size: 1.8em
        font-family: 'lovebeat', var(--font-sans)
        color: white
        text-align: left
        font-weight: 600
</style>
