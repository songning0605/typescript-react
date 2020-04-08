type menuProps = {
  name?: "";
  path: string;
  component: any;
  exact: boolean;
  key?: string;
  routes?: Array<object>;
};

const menu: Array<menuProps> = [
  {
    path: "/",
    component: () => import("@/layouts/IndexPage"),
    exact: true
  },
  {
    path: "/index",
    component: () => import("@/layouts/BasicLayout"),
    exact: false,
    key: "index",
    routes: [
      {
        name: "Home",
        key: "Home",
        path: "/index/home",
        component: () => import("@/pages/Home"),
        exact: false
      },
      {
        name: "关于我",
        key: "about",
        path: "/index/about",
        component: () => import("@/pages/About"),
        exact: true
      }
    ]
  },
  {
    path: "/other",
    component: () => import("../layouts/ThirdLayout"),
    exact: false,
    routes: []
  }
];

export default menu;
