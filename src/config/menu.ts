type menuProps = {
  name?: '',
  path: string,
  component: any,
  exact: boolean,
  routes?: Array<object>,
}

const menu: Array<menuProps> = [
  {
    path: '/',
    component: () => import('../layouts/IndexPage'),
    exact: true,
  },
  {
    path: '/index',
    component: () => import('../layouts/BasicLayout'),
    exact: false,
    routes: [
      {
        name: 'Home',
        path: '/index/home',
        component: () => import('@/views/Home'),
        exact: false,
      },
      {
        name: '关于我',
        path: '/index/about',
        component: () => import('@/views/About'),
        exact: true,
      },
    ],
  },
  {
    path: '/other',
    component: () => import('../layouts/ThirdLayout'),
    exact: false,
    routes: [],
  },
];

export default menu;