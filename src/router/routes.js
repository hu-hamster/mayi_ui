
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: 'daily', component: () => import('src/pages/Daily/DailyDrawer.vue'),
        children: [
          { path: '', component: () => import('src/pages/Daily/DailyList.vue') }
        ]
      },
      {
        path: 'personal', component: () => import('src/pages/Daily/DailyDrawer.vue'),
        children: [
          { path: '', component: () => import('src/pages/Personal/Personal.vue') }
        ]
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
