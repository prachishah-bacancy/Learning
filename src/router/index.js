import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/LandingPage.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/dashboard',
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: () => import('@/views/admin/Dashboard.vue'),
    },
    // Admin routes will be added here
    // {
    //   path: '/admin/projects',
    //   name: 'admin-projects',
    //   component: () => import('@/views/admin/ProjectsView.vue'),
    // },
  ],
})

export default router
