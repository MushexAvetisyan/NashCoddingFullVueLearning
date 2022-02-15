import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Lesson1',
    name: 'Lesson1',
    component: () => import('../components/Lesson_1_TemplateSyntax.vue')
  },
  {
    path: '/Lesson2',
    name: 'Lesson2',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson3',
    name: 'Lesson3',
    component: () => import('../components/Lesson_3_Conditional_template_rendering_Directives_v-if, v-else, v-show.vue')
  },
  {
    path: '/Lesson4',
    name: 'Lesson4',
    component: () => import('../components/Lesson_4_EventHandling.vue')
  },
  {
    path: '/Lesson5',
    name: 'Lesson5',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson6',
    name: 'Lesson6',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson7',
    name: 'Lesson7',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson8',
    name: 'Lesson8',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson9',
    name: 'Lesson9',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson10',
    name: 'Lesson10',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson11',
    name: 'Lesson11',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson12',
    name: 'Lesson12',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson13',
    name: 'Lesson13',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson14',
    name: 'Lesson14',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson15',
    name: 'Lesson15',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson16',
    name: 'Lesson16',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  },
  {
    path: '/Lesson17',
    name: 'Lesson17',
    component: () => import('../components/Lesson_2_AttributeBinding.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
