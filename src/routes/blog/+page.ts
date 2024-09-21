import type { PageLoad } from './$types';
import { postData, filterPosts } from '$lib/posts';

export const load: PageLoad = async ({ params }) => {
  return {
    // remember to change 'blog' to the name of whatever parent folder this is in
    members: await filterPosts(import.meta.glob(`./*.md`), 'blog'),
    ...postData(await import(/* @vite-ignore */ `./index.md`))
  };
};
