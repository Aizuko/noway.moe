<script>
  import BubbleBlurb from '$lib/components/BubbleBlurb.svelte';
  let rand_digit = a => Math.floor(Math.random() * a);

  let discord = "Discord";

  const page_quotes = [
    "Gazing out he boldly claimed, \"It's quite a site\"",
    "The qt on Wayland",
    "298 yen",
  ];

  const quote = page_quotes[rand_digit(page_quotes.length)];

  // Generate fake address
  let rd = () => rand_digit(10);
  let rc = () => String.fromCharCode(rand_digit(26) + 65);

  const address = rand_digit(10000);
  const postal_code = `${rc()}${rd()}${rc()} ${rd()}${rc()}${rd()}`;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Akemi's personal website! OwU" />
</svelte:head>

<section class="home">
  <center class="bad-joke">
    { quote }
  </center>

  <grid class="bubbles">
    <BubbleBlurb class="bubble" title="About Me!">
      <p>
        Hello! I'm Akemi, CS major and TA for a C programming course. I do a few
        things online, most of which are linked here. This site is a bit
        non-linear. Feel free to explore!
      </p>
      <p>
        I'm usually on discord, though email is the best way to get a hold of
        me
      </p>
      <p style="font-size: var(--mini-font-size)">
        I use Arch btw
        (um, actually it's <a href="https://endeavouros.com/">EndeavourOS</a>
        for <a href="https://t2linux.org">t2-enabled macs</a>)
      </p>
    </BubbleBlurb>

    <BubbleBlurb title="Finding Meも">
      <p>
        Contact me... outside of <a href="https://www.ualberta.ca/registrar/examinations/exam-schedules/index.html"
        >exam times</a> please!
      </p>

      <ul>
        <li>
          <a href="https://codeberg.org/akemi">Codeberg</a>
          (open-source <a href="https://github.com/aizuko">Github</a>)
        </li>
        <li><a
          href="https://discord.com/users/180472559148597249"
          on:mouseover={() => discord = "Akemi#2514"}
          on:focus={() => discord = "Akemi#2514"}
          on:mouseout={() => discord = "Discord"}
          on:blur={() => discord = "Discord"}
          >{ discord }</a>
        </li>
        <li><a href="https://anilist.co/user/akemiko">OnlyFans</a></li>
        <li><a href="https://open.kattis.com/users/akemi">Kattis</a></li>
        <li>Email: <tt>echo 'YWtlbWlAbm93YXkubW9lCg==' | base64 -d</tt></li>
        <li>Address: { address } Magika Loop NW, Wayland, { postal_code }</li>
      </ul>
    </BubbleBlurb>

    <BubbleBlurb title="Interests">
      <p>
        <a href="https://codeberg.org/akemi/dotfiles/src/branch/main/vim"
          >Vim</a>, <a href="https://codeberg.org/akemi/dotfiles/src/branch/main/bash"
          >Bash</a>... <a href="https://codeberg.org/akemi/dotfiles.git"
          >Unix!</a>
      </p>
      <p>
        Non-competitive <a href="https://open.kattis.com/users/akemi">competitive programming</a>
      </p>
      <p>
        Learning about machines <a href="https://uais.dev/about">learning</a>
      </p>
      <p style="font-family: var(--font-jp)">
        日本語とアニミ... 当たり前じゃん
      </p>
      <p>You <tt>(&gt;ω^)</tt></p>
    </BubbleBlurb>
  </grid>
</section>

<style lang="sass">
  section.home
    margin: 0
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    background-color: var(--very-dark)

    .bad-joke
      font-family: var(--font-fantasy)
      font-size: 2em

    .bubbles
      display: grid
      grid-template-columns: repeat(2, 1fr)
      gap: 2%

      @media screen and (max-width: 796px)
        display: block

      p
        margin: 0 0 0.5em 0

      ul
        list-style: none
        line-height: 1.4

        li::before
          content: '\2764'
          margin: 0 0.3em 0 -1em
          width: 1em
          color: var(--dark-accent)
</style>
