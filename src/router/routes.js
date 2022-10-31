
const routes = [
  {
    path: '/',
    component: () => import('layouts/BasicLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('components/Login.vue'),
        meta: {
          checkRedirect: true
        }
      },
      {
        path: '/login',
        name:'login',
        component: () => import('components/Login.vue')
      }
    ]
  },
  {
    path: '/theHub',
    component: () => import('layouts/AppLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'landingPage',
        component: () => import('components/LandingPage.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/nucleus',
        name: 'viewCommunicationDashboard',
        meta: {
          requiresAuth: true
        },
        component: () => import('src/nucleus/ViewCommunicationDashboard.vue')
      },
      {
        path: '/nucleus-charts',
        name: 'viewCharts',
        meta: {
          requiresAuth: true
        },
        component: () => import('src/nucleus/ViewCharts.vue')
      },
      {
        path: '/nucleus-maps',
        name: 'viewMaps',
        meta: {
          requiresAuth: true
        },
        component: () => import('src/nucleus/ViewMaps.vue')
      },
      {
        path: '/view/:CommunicationId',
        name: 'viewCommunicationDetail',
        meta: {
          requiresAuth: true
        },
        component: () => import('src/nucleus/ViewCommunicationDetail.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  })
}

export default routes
