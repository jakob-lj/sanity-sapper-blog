<script>

import elements from './../links/nav'
import {getLocale} from './../locale'
  let showMenu = false;

  let disp = "";

  let menuWrapper = "menuWrapper";

  function test(e) {
    console.log("hey there form test");
  }
  function toggleMenu() {
    if (showMenu) {
      hide();
    } else {
      show();
    }

  }

  function show() {
    showMenu = true
    disp = " show";
    menuWrapper += " active";
  }

  function hide() {
    showMenu = false;
    disp = "";
    menuWrapper = "menuWrapper";
  }
</script>

<style>
  .menuWrapper {
    width: 100%;
    border-bottom: 3px solid #1d3244;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: white;
    box-shadow: 0 3px 11px #00000040;
  }

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
    height: 64px;
  }

  .nav-list a {
    text-decoration: none;
  }

  .show {
    display: block !important;
  }

  .hide {
    display: none;
  }

  .item {
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 1.3em;
    color: #1d3244;
    text-transform: uppercase;
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

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */

    .active {
      border-bottom: none;
      box-shadow: 0 3px 11px #000000cc;
    }

    .menu-logo {
      margin: 0;
    }

    .menu {
      flex-direction: column;
      padding: 1em 0 0 0;
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
    }

    .nav-list:last-child .item:last-child {
    }
  }
</style>

<div class={menuWrapper}>
  <div class="menu">
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
      <div class={'nav-list' + disp} on:click={hide}>
      {#each elements as element}
      <a href={element.link}>
      <div class="item">
      <span>{getLocale(element)}</span>
      </div>
      </a>
      {/each}
      </div>
    </div>
  </div>
</div>
