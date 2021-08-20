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
  import imageUrlBuilder from '@sanity/image-url'
import Author from '../../components/Author.svelte';

  const builder = imageUrlBuilder(myConfiguredSanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  export let posts;
  // console.log(posts)

</script>

<svelte:head>
  <title>Projekty</title>
</svelte:head>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6">
  {#each posts as post}
  {#if post.mainImage.asset}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<div class="">
      <a rel='prefetch' href='projects/{post.slug.current}'>
      <div>
        <img class="w-full" src={urlFor(post.mainImage).width(1000).height(600).url()} alt="{post.mainImage.alt}"/>
        <div class="pt-4 pb-6">
          <h2> {post.title} </h2>
        </div>
      </div>
      </a>
    </div>
	{/if}
  {/each}
  </div>
