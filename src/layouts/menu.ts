interface menuProps {
  name?: '',
  path: string,
  component: any,
  exact: boolean,
  routes?: Array<object>,
}

const menu: Array<menuProps> = [
  {
    path: '/index',
    component: () => import('@/layouts/BasicLayout'),
    exact: false,
    routes: [
      {
        name: '首页',
        path: '/index/about',
        component: () => import('@views/Home'),
        exact: false,
      },
      {
        name: 'Home',
        path: '/index/home',
        component: () => import('@views/Home'),
        exact: false,
      },
      {
        name: '关于我',
        path: '/index',
        component: () => import('@views/About'),
        exact: true,
      },
    ],
  },
  {
    path: '/other',
    component: () => import('@/layouts/OtherLayout'),
    exact: false,
    routes: [],
  },
];

export default menu;