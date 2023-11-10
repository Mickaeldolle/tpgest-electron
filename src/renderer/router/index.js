import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('../src/views/HomePage.vue') },
    {
      path: '/daily-planning',
      name: 'dailyPlanning',
      component: () => import('../src/views/DailyPlanningPage.vue')
    },
    {
      path: '/small-machine',
      name: 'smallMachine',
      component: () => import('../src/views/SmallMachinePage.vue')
    },
    {
      path: '/intern-machine',
      name: 'internMachine',
      component: () => import('../src/views/InternMachinePage.vue')
    },
    {
      path: '/intern-machine',
      name: 'internMachine',
      component: () => import('../src/views/InternMachinePage.vue')
    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('../src/views/EmployeeListPage.vue')
    },
    {
      path: '/external-machine',
      name: 'externMachine',
      component: () => import('../src/views/ExternMachinePage.vue')
    }
  ]
})

export default router
