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

    <h3 class="">{post.title}</h3>
    {#if post.description} <p>{post.description}</p> {/if}

{#if post.studie} 
<h3>Studie</h3>
<p>{post.studie}</p> 
{/if}

{#if post.navrh}
<h3>Návrh</h3>
<p>{post.navrh}</p>
{/if}

{#if post.spoluprace}
<h3>Spolupráce</h3>
<p>{post.spoluprace}</p> 
{/if}

{#if post.lokace}
<h3>Místo stavby</h3>
<p>{post.lokace}</p> 
{/if}

{#if post.investor}
<h3>Investor</h3>
<p>{post.investor}</p>
{/if}

{#if post.rok}
<h3>Rok</h3>
<p>{post.rok.substring(0,4)}</p>
{/if}


{#if post.prostor}
<h3>Celková obestavěný prostor</h3>
<p>{post.prostor}</p>
{/if}

{#if post.vizualizace}
<h3>Vizualizace</h3>
<p>{post.vizualizace}</p>
{/if}

{#if post.foto}
<h3>Fotografie</h3>
<p>{post.foto}</p>
{/if}

{#if post.oceneni}
<h3>Ocenění</h3>
<p>{post.oceneni}</p>
{/if}

<button> Next post </button>

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
