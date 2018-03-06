import Root from './root';
import Home from './home';
import Feed from './feed';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/feed',
        component: Feed,
      },
    ],
  },
];
