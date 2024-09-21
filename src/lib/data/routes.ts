export type RouteData = {
  title: string;
  route: string;
};

export type MenuRoute = {
  title: string;
  root?: string;
  children: RouteData[];
};

export const routes: (MenuRoute | RouteData)[] = [
  {
    title: 'Articles',
    root: '/blog',
    children: [
      {
        title: 'Directory',
        route: '/'
      },
      {
        title: 'Article 1',
        route: '/one'
      },
      {
        title: 'Article 2',
        route: '/two'
      }
    ]
  },
  {
    title: 'About',
    route: '/about'
  }
];
