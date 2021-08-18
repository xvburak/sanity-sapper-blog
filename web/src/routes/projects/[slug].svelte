<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/${params.slug}`);
      const { post } = await res.json();
      return { post };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";

  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
{#if post.studie} <p>{post.studie}</p> {/if}
{#if post.navrh} <p>{post.navrh}</p> {/if}
{#if post.spoluprace} <p>{post.spoluprace}</p> {/if}
{#if post.investor} <p>{post.investor}</p> {/if}
{#if post.prostor} <p>{post.prostor}</p> {/if}
{#if post.rok} <p>{post.rok}</p> {/if}
{#if post.vizualizace} <p>{post.vizualizace}</p> {/if}
{#if post.foto} <p>{post.foto}</p> {/if}
{#if post.oceneni} <p>{post.oceneni}</p> {/if}

<div class="content">
  <BlockContent blocks={post.body} {serializers} />
</div>
