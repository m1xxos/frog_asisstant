import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView";
import CreateProject from "@/views/CreateProject";
import MyProjects from "@/components/MyProjects";
import Agreements from "@/views/Agreements";

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/projects'
  },
  {
    path: '/createproject',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateProject
  },
  {
    path: '/projects',
    name: 'myprojects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MyProjects
  },
  {
    path: '/agreements',
    name: 'agreements',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Agreements
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
