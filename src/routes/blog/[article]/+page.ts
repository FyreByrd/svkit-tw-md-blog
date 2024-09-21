import type { PageLoad } from './$types';
import { postData } from '$lib/posts';

export const load: PageLoad = async ({ params }) => {
  return postData(await import(`../${params.article}.md`));
};
