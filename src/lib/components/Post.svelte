<script>
  export let data;
</script>

<article>
  <h1>{data.title}</h1>
  <p>
    Created: {new Date(data.created).toLocaleDateString()}<br />
    Updated: {new Date(data.modified).toLocaleString()}
  </p>
  <hr />
  <svelte:component this={data.content} />
  <slot></slot>
  <hr />
  <p>
    Updated: {new Date(data.modified).toLocaleString()}
  </p>
</article>
