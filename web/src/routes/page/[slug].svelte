<script context="module">
  import client from "../../sanityClient";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";
  import {getLocale, getLocaleBlock} from './../../locale'
  
  export async function preload({ params }, session) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "page" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            _type,
            author->
          }
        }
      }
    }`;

    const query = filter + projection;
    const page = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
      page.title = getLocale(page.title, session.lang)
      page.body = getLocaleBlock(page.body, session.lang)
    return { page };
  }
</script>

<script>

  export let page;
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(img) {
    display: block;
    max-width: 100%;
  }

  .content :global(figure) {
    margin: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

<h1>{page.title}</h1>

<div class="content">
  <BlockContent blocks={page.body} {serializers} />
</div>
