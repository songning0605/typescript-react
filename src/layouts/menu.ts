interface menuProps {
  path: string,
  component: any,
  exact: boolean,
  routes?: Array<object>,
}

const menu: Array<menuProps> = [
  {
    path: '/',
    component: () => import('@/layouts/BasicLayout'),
    routes: [
      {
        path: '/',
        component: () => import('@views/Home'),
        exact: true,
      },
      {
        path: '/about',
        component: () => import('@views/About'),
        exact: false,
      },
    ],
  },
]

export default menu;