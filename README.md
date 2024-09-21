# svkit-tw-md-blog

A template for creating a Markdown blog with SvelteKit and TailwindCSS/DaisyUI.

Currently supports writing the posts using Obsidian with a few plugins.
Also allows graphs written with MermaidJS syntax.

## Using the template

To view locally with live changes: `npm run dev`

To build and make sure features work with a static site host: `npm run build && npm run preview`

> The contents of [routes/\[article\]](src/routes/\[article\]) must be copied into each subfolder from which you want to serve markdown pages. See [routes/blog\[article\]](src/routes/blog/\[article\]) as an example. I tried to make it work more elegantly, but that did not play well with SSR.

## Future

Features to implement in the future:
- Theme-change
- Categories
- Category search
- Basic search
- Thumbnails
- Excerpts
