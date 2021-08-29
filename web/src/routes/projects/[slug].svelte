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

  let imgs = post.gallery.images;

  console.log(imgs);

</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="sm:flex">

<div class="w-full bg-yellow-200 sm:w-1/2 sm:mr-4 md:w-1/3  md:mr-4">

<h3>{post.title}</h3>
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

</div>

<div class="content w-full sm:w-1/2 md:w-2/3 bg-green-200">
  <!-- <BlockContent blocks={post.body} {serializers} /> -->
  <!-- {#each post.gallery as image}
    <img class="w-full" src={urlFor(image.mainImage).width(600).height(400).url()} alt="{post.mainImage.alt}"/>
   -->
  {#each imgs as img}
  <img class="w-full mb-4" src={urlFor(img).url()} alt="{img.alt}"/>
  {/each}
</div>

</div>