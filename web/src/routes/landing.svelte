<script>

let now = new Date()
let end = new Date(2021, 0, 1) // january first

let diff = end - now;

$: days = parseInt(diff / (1000*60*60*24)) // days
$: hours = parseInt(((diff / (1000*60*60*24)) - days) * 24) // hours
$: minutes = parseInt(((((diff / (1000*60*60*24)) - days) * 24) - hours)*60);
$: seconds = parseInt((((((diff / (1000*60*60*24)) - days) * 24) - hours)*60 - minutes)*60);

setInterval(() => {
    diff = diff - 1000
}, 1000)

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
</style>

<main>
  <background />
  <wrapper>
    <div class="menu">
      <div class="menu-logo">
        <a href="#" class="menu-logo-a">
          <img class="menu-logo-img" src={'logo.png'} />
        </a>
      </div>
      <div class="nav-list-wrapper">
        <div class="nav-list">
          <a>
            <div class="item">
              <span>PROGRAM</span>
            </div>
          </a>
          <a>
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
          <span class="t">01. - 01. januar 2021</span>
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
    <container />
  </news>

</main>
