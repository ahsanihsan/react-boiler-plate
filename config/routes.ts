/**
 * @name umi routing configuration
 * @description Only supports the configuration of path,component,routes,redirect,wrappers,title
 * @param path  path supports only two placeholder configurations, the first is the dynamic parameter :id form, and the second is the * wildcard, which can only appear at the end of the routing string.
 * @param component Configure the React component path to render after location and path match. It can be an absolute path or a relative path. If it is a relative path, it will start from src/pages。
 * @param routes Configure sub-routes, usually used when you need to add layout components to multiple routes.
 * @param redirect Configure route jump
 * @param wrappers Configure the wrapper component of the routing component, through which you can combine more functions for the current routing component. For example, it can be used for routing-level permission verification.
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'Login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    access: 'user',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    access: 'user',
    component: './TableList',
  },
  {
    path: '/',
    access: 'user',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
