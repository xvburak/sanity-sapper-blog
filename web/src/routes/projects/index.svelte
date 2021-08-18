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

    const builder = imageUrlBuilder(myConfiguredSanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  export let posts;

</script>

<svelte:head>
  <title>Projekty</title>
</svelte:head>

<ul class="flex flex-wrap">
  {#each posts as post}

		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li class="md:w-1/2 lg:w-1/3">
      <a rel='prefetch' href='projects/{post.slug.current}'>
      <div>
        <img src={urlFor(post.mainImage).url()}
/>
        <h2> {post.title} </h2>
      </div>
      </a>
    </li>
	{/each}
</ul>
