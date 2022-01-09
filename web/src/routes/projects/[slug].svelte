<script context="module">
  export async function preload({
    params
  }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/${params.slug}`);
      const {
        post
      } = await res.json();
      return {
        post
      };
    } catch (err) {
      this.error(500, err);
    }
  };

</script>

<script>
  import BlockContent from "@movingbrands/svelte-portable-text"
  import serializers from "../../components/serializers"

  import myConfiguredSanityClient from '../../sanityClient'
  import imageUrlBuilder from '@sanity/image-url';

  const builder = imageUrlBuilder(myConfiguredSanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  export let post;
  export let posts;
  let imgs = "";

  let gallery = post.gallery;
  // let imgs = post.gallery.images;

  if (typeof gallery !== 'undefined'){
    imgs = post.gallery.images;
  } else {
    let imgs = false;
  }
 

</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="md:flex">

<div class="w-full md:sticky top-4 md:self-start md:w-1/3  md:mr-4">
  <div class="mb-4">
    <h3 class="">{post.title}</h3>
    {#if post.description} <p>{post.description}</p> {/if}
  </div>
{#if post.studie} 
<div class="mb-4">
  <h3>Studie</h3>
  <p>{post.studie}</p>
</div> 
{/if}

{#if post.navrh}
<div class="mb-4">
  <h3>Návrh</h3>
  <p>{post.navrh}</p>
</div>
{/if}

{#if post.spoluprace}
<div class="mb-4">
  <h3>Spolupráce</h3>
  <p>{post.spoluprace}</p> 
</div>
{/if}

{#if post.lokace}
<div class="mb-4">
  <h3>Místo stavby</h3>
  <p>{post.lokace}</p> 
</div>
{/if}

{#if post.investor}
<div class="mb-4">
  <h3>Investor</h3>
  <p>{post.investor}</p>
</div>
{/if}

{#if post.rok}
<div class="mb-4">
  <h3>Rok</h3>
  <p>{post.rok.substring(0,4)}</p>
</div>
{/if}


{#if post.prostor}
<div class="mb-4">
  <h3>Celková obestavěný prostor</h3>
  <p>{post.prostor}</p>
</div>
{/if}

{#if post.vizualizace}
<div class="mb-4">
  <h3>Vizualizace</h3>
  <p>{post.vizualizace}</p>
</div>
{/if}

{#if post.foto}
<div class="mb-4">
  <h3>Fotografie</h3>
  <p>{post.foto}</p>
</div>
{/if}

{#if post.oceneni}
<div class="mb-4">
  <h3>Ocenění</h3>
  <p>{post.oceneni}</p>
</div>
{/if}


<!-- <a rel='prefetch' href='projects/{posts[4].slug.current}'> předchozí projekt ⬅️</a>
<a rel='prefetch' href='projects'> další projekt ➡</a> -->


</div>

<div class="content w-full md:w-2/3 ">

  <img class="w-full mb-4" loading="eager" src={urlFor(post.mainImage).width(600).height(400).url()} alt="{post.mainImage.alt}"/>

  {#if imgs}
    {#each imgs as img}
      <img class="w-full mb-4" loading="lazy" src={urlFor(img).width(600).url()} alt="{img.alt}"/>
    {/each}

  {/if}
</div>

</div>
