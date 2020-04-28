<script>
export let up;
</script>
<style>
i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    width: .2em;
    margin-left: .5em;
    height: .2em;
    /* padding-right: .3em; */
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-top: .8em;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>

{#if up}
<i class="arrow up"></i>
{:else}
<i class="arrow down"></i>
{/if}
