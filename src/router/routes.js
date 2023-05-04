
function isLogined(to, from, next) {  // 判断是否已经登录过
  const token = localStorage.getItem("token")
  if (to.path != '/' && to.path != '/login' && to.path != '/register') {
    if (token == '') {
      next('/login')
    } else {
      next()
    }
  } else {
    if (token == '') {
      next()
    } else {
      next('/app/daily')
    }
  }
}

function isCorrectPath(to, from, next) { 

}

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ],
    beforeEnter: [isLogined],
  },
  {
    path: '/register',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ],
    beforeEnter: [isLogined],
  },
  {
    path: '/app',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: 'daily', component: () => import('src/pages/Daily/DailyDrawer.vue'),
        children: [
          { path: '', component: () => import('src/pages/Daily/DailyList.vue') }
        ],
        beforeEnter: [isLogined],
      },
      {
        path: 'personal', component: () => import('src/pages/Daily/DailyDrawer.vue'),
        children: [
          { 
            path: '', component: () => import('src/pages/Personal/Personal.vue'),
            children: [
              {
                path: '', components: {
                  info: () => import('src/pages/Personal/Info.vue'),
                  security: () => import('src/pages/Personal/Security.vue'),
                  push: () => import('src/pages/Personal/Push.vue'),
                  about: () => import('src/pages/Personal/About.vue'),
                }
              }
            ],
            beforeEnter: [isLogined],
          }
        ]
      },
      {
        path: 'review', component: () => import('src/pages/Daily/DailyDrawer.vue'),
        children: [
          { path: '', component: () => import('src/pages/Daily/Review.vue') }
        ],
        beforeEnter: [isLogined],
      }
    ],
    redirect: '/app/daily',
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
