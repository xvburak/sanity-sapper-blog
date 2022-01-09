<script context="module">
  export async function preload({
    params
  }) {
    try {
      const res = await this.fetch('api/blog/all');
      const {
        posts
      } = await res.json()
      return {
        posts
      };
    } catch (err) {
      this.error(500, err);
    }
  };



</script>

<script>
  import myConfiguredSanityClient from '../../sanityClient'
  import imageUrlBuilder from '@sanity/image-url';

  const builder = imageUrlBuilder(myConfiguredSanityClient)

  function urlFor(source) {
    return builder.image(source)
  }



  export let posts;

  let yes = true;

</script>

<svelte:head>
  <title>Projekty</title>
</svelte:head>

<div class="flex justify-end uppercase mb-4">
  <label class="cursor-pointer">
    <input
      class="form-tick appearance-none bg-white bg-check h-3 w-3 border border-black rounded-full checked:bg-black checked:border-transparent focus:outline-none"
      type=radio bind:group={yes} value={true}>
    galerie
  </label>
  <label class="ml-4 cursor-pointer">
    <input
      class="cursor-pointer form-tick appearance-none bg-white bg-check h-3 w-3 border border-black rounded-full checked:bg-black checked:border-transparent focus:outline-none"
      type=radio bind:group={yes} value={false}>
    index
  </label>
</div>


{#if yes}
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
  {#each posts as post}
  {#if post.mainImage.asset}
		<div class="">
      <a rel='prefetch' href='projects/{post.slug.current}'>
      <div>
        <img class="w-full" src={urlFor(post.mainImage).width(600).height(400).url()} alt="{post.mainImage.alt}"/>
        <div class="pt-4 pb-4">
          <h2>{post.title}</h2>
        </div>
      </div>
      </a>
    </div>
	{/if}
  {/each}
  </div>
{:else}
  {#each posts as post}
    <h3> {post.title} </h3>
  {/each}
{/if}
