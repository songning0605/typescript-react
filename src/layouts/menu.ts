interface menuProps {
  path: string,
  component: any
}

const menu: Array<menuProps> = [
  {
    path: '/',
    component: () => import('@views/Home'),
  },
  {
    path: '/about',
    component: () => import('@views/About'),
  },
]

export default menu;