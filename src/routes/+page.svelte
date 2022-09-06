<script>
  import BubbleBlurb from '$lib/components/BubbleBlurb.svelte';

  let discord = "Discord";

  // Generate fake data
  let rand_digit = a => Math.floor(Math.random() * a);

  let rd = () => rand_digit(10);
  let rc = () => String.fromCharCode(rand_digit(26) + 65);

  const social_insurance_number =
    `${rd()}${rd()}${rd()}-${rd()}${rd()}${rd()}-${rd()}${rd()}${rd()}`;

  const eye_color = rand_digit(16777216).toString(16);
  const eye_inverse =
    (Number(`0x1${eye_color}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();

  const address = rand_digit(10000);
  const postal_code = `${rc()}${rd()}${rc()} ${rd()}${rc()}${rd()}`;
</script>

<svelte:head>
  <title>Akemi Izuko ~ Home</title>
  <meta name="description" content="Akemi's personal website! OwU" />
</svelte:head>

<section class="home">
  <center class="bad-joke">
    Gazing out he boldly claimed, "It's quite a site"
  </center>

  <grid class="bubbles">
    <BubbleBlurb class="bubble" title="About Me!">
      <p>There's so much to say, how can I possibly fit it into one bubble?</p>
      <p>Blazing fast 🚀, like rust</p>
      <p>Uncertified comedian</p>
      <p>Has a prettier sin number than you ({ social_insurance_number })</p>
      <p>
        "A mousè? You mean that thing Kuro keeps leaving in the back yard?"
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
        <li>Email: <tt>echo 'YWtlbWlAbm93YXkubW9lCg==' | base64 -d</tt></li>
        <li>Address: { address } Magika Loop NW, Canada, { postal_code }</li>
      </ul>
    </BubbleBlurb>

    <BubbleBlurb title="Interests">
      <p><a>Unix</a>, <a>nVim</a>, <a>Bash</a>, etc... <a>Configs!</a></p>
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
