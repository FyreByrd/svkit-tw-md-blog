export function postData(post: any) {
  const { title, created, modified } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    created,
    modified
  };
}

export async function filterPosts(all: Record<string, () => Promise<unknown>>, parent: string) {
  return (
    await Promise.all(
      Object.entries(all).map(async ([path, resolver]) => {
        const { metadata } = (await resolver()) as any;
        const postPath = path.slice(1, -3);

        return {
          meta: metadata,
          path: '/' + parent + postPath
        };
      })
    )
  ).filter((post) => {
    return post.path.split('/')[2] !== 'index';
  });
}
