<script context="module">
  import client from "../sanityClient";
  import Post from "../components/Post.svelte";
  import Content from "./../components/Content.svelte";

  export function preload({ params, query }) {
    return client
      .fetch(
        '*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)[0..2]'
      )
      .then(posts => {
        return { posts };
      })
      .catch(err => this.error(500, err));
  }
</script>

<script>
  export let posts;

  let now = new Date();
  let end = new Date(2021, 1, 24); // january first

  let diff = end - now;

  $: days = parseInt(diff / (1000 * 60 * 60 * 24)); // days
  $: hours = parseInt((diff / (1000 * 60 * 60 * 24) - days) * 24); // hours
  $: minutes = parseInt(
    ((diff / (1000 * 60 * 60 * 24) - days) * 24 - hours) * 60
  );
  $: seconds = parseInt(
    (((diff / (1000 * 60 * 60 * 24) - days) * 24 - hours) * 60 - minutes) * 60
  );

  setInterval(() => {
    diff = diff - 1000;
  }, 1000);


 // nav logic
  let showMenu = false;

  let disp = "";

  let menuWrapper = "menu";

  function toggleMenu() {
    if (showMenu) {
      hide();
    } else {
      show();
    }
  }

  function show() {
    showMenu=true; 
    disp = " show";
    menuWrapper += " active";
  }

  function hide() {
    showMenu = false;
    disp = "";
    menuWrapper = "menu";
  }
</script>

<style>
  .menu {
    display: flex;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
    padding: 10px 30px;
  }

  .menu-logo {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }

  .menu-logo-a {
    color: #333;
    text-decoration: none;
  }

  .menu-logo-img {
    height: 128px;
  }

  .item {
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 1.3em;
    color: white;
  }

  .item:hover {
    cursor: pointer;
  }

  .nav-list {
    width: fit-content;
    display: flex;
  }

  .nav-list a {
    text-decoration: none;
  }

  .nav-list-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  container {
    display: block;
    width: 1440px;
    margin: auto;
    padding: 10px 30px;
    text-align: center;
    color: white;
    height: 100%;
  }

  main {
  }

  title {
    font-size: 4em;
    font-weight: bold;
    display: block;
    text-shadow: 0px 0px 16px #1d3244;
  }

  background {
    background-image: url("/background_home.jpg");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    z-index: -1;

    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  wrapper {
    display: block;
    height: 800px;
    width: 100%;
    color: #1d3244;
  }

  inner-wrapper {
    display: block;
    position: relative;
    top: 25%;
    left: 50%;
    width: fit-content;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }

  news {
    display: block;
    background: whitesmoke;
    min-height: 500px;
  }

  .time-wrapper {
    margin: 1em;
  }

  .t {
    font-size: 1.7em;
    font-weight: bold;
  }

  .timeout-clock {
    display: flex;
    margin: auto;
    justify-content: center;
  }

  .timeout-clock .element {
    margin: 1em;
  }

  .timeout-clock span {
    display: block;
  }

  .timeout-clock .time {
    font-size: 2.5em;
  }

  .timeout-clock .qualifier {
    font-weight: bold;
  }

  .posts {
    display: flex;
    flex-wrap: wrap;
  }

   .show {
    display: block !important;
  }

  .hide {
    display: none;
  }

    .menu-mobile-button {
    display: none;
    cursor: pointer;
  }

  .bar {
    width: 40px;
    height: 8px;
    background-color: #1d3244;
    margin: 5px;
  }

  .news-title-wrapper {
    margin: 0 auto;
    border-bottom: 3px solid #1d3244;
    color: #1d3244;
    width: fit-content;
  }

  .news-title-wrapper h1 {
    color: #1d3244;
    padding: 0 20px 0 20px;
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */

    inner-wrapper {
      top: 31%;
      position: fixed;
      z-index: -1;
    }


  title {
    font-size: 2em;
  }

  .timeout-clock .time {
    font-size: 2em;
  }

  wrapper {
    height: 500px;
  }


  .timeout-clock .element {
    font-size: .9em;
  }
  .t {
    font-size: 1em;
  }

    .active {
      border-bottom: none !important;
      box-shadow: 0 3px 11px #000000cc !important;
    }

    .menu-logo {
      margin: 0;
    }
.menu-logo img {
      height: 64px;

}
    .menu {
      flex-direction: column;
      padding: 1em 0 0 0;
      background: white;
      box-shadow: 0px 6px 8px #00000029;
      border-bottom: 3px solid #1d3244;
      z-index: 1;
      position: fixed;
      width: 100%;
      height: 69px;
    }

    .menu-mobile-button {
      display: block;
      position: absolute;
      right: 1em;
      top: 1em;
    }

    .nav-list {
      width: 100%;
      flex-direction: column;
      display: none;
      /*border-top: 3px solid #d4d4d4; => Works pretty well with just background color*/
    }

    .item {
      /*border-top: 3px solid #d4d4d4; => Works pretty well with just background color => adding more padding to compensate for missing whitespace*/
      margin: auto;
      background: #1d3244;
      color: white;
    }

    .item span {
      padding: 0.4em 0.8em 0.4em 0.8em;
      text-align: center;
      margin: auto;
    }

    .nav-list-wrapper {
      width: 100%;
      z-index: 2;
    }

    .nav-list:last-child .item:last-child {
    }
  }
</style>

<main>
  <background />
  <wrapper>
    <div class={menuWrapper}>
      <div class="menu-logo">
        <a href="/landing" class="menu-logo-a">
          <img class="menu-logo-img" src={'logo.png'} />
        </a>
      </div>
          <div class="menu-mobile-button" on:click={toggleMenu}>
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
    </div>
      <div class="nav-list-wrapper">
        <div class={"nav-list" + disp}>
          <a href="/page/program">
            <div class="item">
              <span>PROGRAM</span>
            </div>
          </a>
          <a href="/page/info">
            <div class="item">
              <span>INFO</span>
            </div>
          </a>
          <a>
            <div class="item">
              <span>IDRETTER</span>
            </div>
          </a>
          <a>
            <div class="item">
              <span>FRIVILLIGE</span>
            </div>
          </a>
          <a>
            <div class="item">
              <span>OM STUDENTLEKENE</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- end of nav -->
    <div style="height: 100%">
      <inner-wrapper>
        <title>STUDENTLEKENE 2021</title>
        <div class="time-wrapper">
          <span class="t">24. - 28. februar 2021</span>
        </div>
        <div class="timeout-clock">
          <div class="element">
            <span class="time">{days}</span>
            <span class="qualifier">dager</span>
          </div>
          <div class="element">
            <span class="time">{hours}</span>
            <span class="qualifier">timer</span>
          </div>
          <div class="element">
            <span class="time">{minutes}</span>
            <span class="qualifier">minutter</span>
          </div>
          <div class="element">
            <span class="time">{seconds}</span>
            <span class="qualifier">sekunder</span>
          </div>
        </div>
      </inner-wrapper>
    </div>

  </wrapper>
  <news>
    <Content>
    <div class="news-title-wrapper">
      <h1>Nyheter</h1>
    </div>
      <div class="posts">
        {#each posts as post}
          <Post color={'green'} {post} />
        {/each}
      </div>
    </Content>
  </news>

</main>
