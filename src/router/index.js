import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/HomeVue.vue'
import AboutVue from '../views/AboutVue.vue'
import ProjectsVue from '../views/ProjectsVue.vue'
import SkillsVue from '../views/SkillsVue.vue'
import ContactVue from '../views/ContactVue.vue'


const routes = [
  {
    path: '/',
    component: HomeVue
  },
  {
    path: '/About',
    component: AboutVue
  },
  {
    path: '/Projects',
    component: ProjectsVue
  },{
    path: '/Skills',
    component: SkillsVue
  },{
    path: '/Contact',
    component: ContactVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
