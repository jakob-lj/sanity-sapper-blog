
<script>
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

  .item {
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 1.3em;
    color: #1d3244;
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

  .menu-mobile-button {
    display: block;
  }

  .nav-list {
    display: none;
    background: red;
    flex-direction: column;
  }
  }

</style>

<div class="menuWrapper">
    <div class="menu">
        <div class="menu-logo">
        <a href="#" class="menu-logo-a">
            <img class="menu-logo-img" src={'logo.png'} />
        </a>
        </div>
        <div class="nav-list-wrapper">
        <div class="menu-mobile-button">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        </div>
        <div class="nav-list">
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
</div>
