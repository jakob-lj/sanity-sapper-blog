<script context="module">
  import client from "../../sanityClient";
  import {getLocale} from './../../locale'
  export function preload({ params, query }, session) {
    return client
      .fetch(
        '*[_type == "page" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)'
      )
      .then(pages => {
        pages.forEach(p => {
          p.title = getLocale(p.title, session.lang)
        })
        return { pages };
      })
      .catch(err => this.error(500, err));
  }
</script>

<script>
  export let pages;
  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
  console.log(pages)
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each pages as page}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="page/{page.slug.current}">{page.title}</a>
      ({formatDate(page.publishedAt)})
    </li>
  {/each}
</ul>
