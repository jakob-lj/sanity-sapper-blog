<script>
import client from './../sanityClient.js'
    import imageUrlBuilder from '@sanity/image-url'
import {getLocale} from './../locale'
const builder = imageUrlBuilder(client)
const urlFor = (source) => {
  return builder.image(source)
}
import {stores} from '@sapper/app'
  let {session} = stores()

  export let post;
  export let color;
  let sty = `background-color:${color}`;
  let imageUrl = urlFor(post.mainImage).url();
  let backStyle = `background-image: url('${imageUrl}')`;

  let link = `/news/${post.slug.current}`

</script>

<style>
  .post {
    width: 29%;
    border-radius: 5px;
    margin: 2%;
    text-align: center;
    background: white;
    box-shadow: 0px 6px 8px #00000055;
  }

  .mainImage {
    height: 240px;
    width: 100%;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .title {
    color: #1d3244;
  }

  .title-wrapper {
    margin: 1em;
  }

  .d {
    text-decoration: none;
  }

  .callToAction {
    display: block;
    background: #296a42;
    padding: 0.2em 0.8em 0.3em 0.8em;
    color: white;
    font-weight: bold;
    font-size: 1.3em;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
    border-radius: 12px;
    text-decoration: none;
    border: 2px solid #0b2b0e;
    box-shadow: 0px 6px 8px #00000057;
    width: fit-content;
  }
  .callToAction:hover {
    background: #0b2b0e;
    box-shadow: none;
  }

    @media only screen and (max-width: 768px) {
  /* For mobile phones: */
    .post {
        width: 100%;
        margin-top: 3em;
    }

    .mainImage{
      height: 180px;
    }

    .title {
      font-size: 1.7em;
    }
  
  }
</style>

<div class="post">
  <div style={backStyle} class="mainImage" />
  <div class="title-wrapper">
    <h1 class="title">
      <a class="d" href={link}>{getLocale(post.title, $session.lang)}</a>
    </h1>
    <a class="callToAction" href={link}>Les mer</a>
  </div>

</div>
