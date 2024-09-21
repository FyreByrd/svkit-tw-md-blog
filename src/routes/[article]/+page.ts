import type { PageLoad } from './$types';
import { postData } from '$lib/posts';

// This entire folder should be copied into any subfolder to serve markdown from
// allows for dynamic routing of posts
export const load: PageLoad = async ({ params }) => {
  return postData(await import(`../${params.article}.md`));
};
