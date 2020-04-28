<script>

import Arrow from './Arrow.svelte'

import {stores, goto} from '@sapper/app'
let {session} = stores()

let showLang = false

let norsk = () => {
    fetch('/api/nb')
    session.set({lang:'nb'})
    // window.location.href = "/landing"
}

let engelsk = () => {
    fetch('/api/en')
    session.set({lang:'en'})
    // window.location.href = "/landing"
}

let changeLang = (lang) => {
    toggleLang()
    fetch(`/api/${lang}`)
    session.set({lang:lang})
}

let toggleLang = () => {
    showLang = !showLang
}

$: selectedLang = $session.lang || 'nb'

</script>

<style>
.footer {
    width: 100%;
    /* height: 6em; */
    height: fit-content;
    background-color: #1d3244;
    text-align: center;
}

.footer-content {
    /* position: relative;
    top: 50%;
    transform: translateY(-50%); */
    position: relative;
    padding: 4em;
}

.lang-wrapper {
    height: 2em;
    background: white;
    width: fit-content;
    padding: .1em;
    border: 1px solid #eee;
    display: flex;
    border-radius: 5px;
    padding-right: 1.5em;
    margin: auto;
    position: relative;
    cursor: pointer;
}

.lang-img {
    height: 2em;
    display: block;
    width: 3em;
}

.arrow-wrapper {
    position: absolute;
    left: 3em;
    top: 46%;
    transform: translateY(-50%);
}

.selection-wrapper {
    display: flex;
    margin: auto;
    flex-direction: column;
    height: fit-content;
    position: absolute;
    top: 7.1em;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border: 1px solid #eee;
    padding: 5px;
    color: #1d3244;
    border-radius: 5px;
}

.lang-option {
    display: flex;
    vertical-align: middle;
    margin: .3em;
    cursor: pointer;
}

.lang-option:hover {
    color: #0a0011;
}

.lang-img-option {
    height: 2em;
    width: 2em; 
}

.lang-option-span-wrapper {
    display: flex;
    vertical-align: middle;
    height: 100%;
}

.lang-option-span {
        font-size: 100%;
    height: fit-content;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: .3em;
    font-weight: bold;
}


</style>
<div class="footer">
<div class="footer-content">
    <!-- <button on:click={norsk}>
    norsk
    </button>

    <button on:click={engelsk}>
    engelsk
    </button> -->
    <div style="color: white">
    
    <div class="lang-wrapper" on:click={toggleLang}>
        <img class="lang-img" src={`/${selectedLang}.svg`} alt="flag"/>
        <div class="arrow-wrapper">
            <Arrow up={showLang} />
        </div>
    </div>
    {#if showLang}
    <div class="selection-wrapper">
        <div class="lang-option" on:click={() => {changeLang('nb')}}>
            <img class="lang-img-option" src="/nb.svg" alt="flag"/>
            <div class="lang-option-span-wrapper">
            <span class="lang-option-span">NB</span>
            </div>
        </div>
        <div class="lang-option" on:click={() => {changeLang('en')}}>
            <img class="lang-img-option" src="/en.svg" alt="flag"/>
            <div class="lang-option-span-wrapper">
            <span class="lang-option-span">EN</span>
            </div>
        </div>
    </div>
    <div style="height: 8em">
    </div>
    {/if}
    </div>
</div>
</div>