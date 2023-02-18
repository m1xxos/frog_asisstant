import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView";
import CreateProject from "@/views/CreateProject";

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/createproject',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
