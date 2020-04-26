<style>
</style>

<div>token: {$session}</div>
<button on:click={login}>li</button>
<script>
  import { stores } from '@sapper/app'
  import { onMount } from 'svelte'
  const { session } = stores()
  console.log(session)
  console.log($session)
  async function login() {
      let r  = await fetch('/api/lang')
      console.log(r)
  }
</script>