import { createRouter, createWebHistory } from 'vue-router'

// Lazy loading para optimización de performance
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Projects = () => import('../views/Projects.vue')
const Contact = () => import('../views/Contact.vue')
const ProjectDetail = () => import('../views/ProjectDetail.vue')
const Admin = () => import('../views/Admin.vue')
const AdminUsers = () => import('../views/AdminUsers.vue')
const AdminProjects = () => import('../views/AdminProjects.vue')
const LiveProjects = () => import('../views/LiveProjects.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  },
  {
    path: '/live',
    name: 'LiveProjects',
    component: LiveProjects
  },
  // Ruta de administración con rutas anidadas (jerárquicas)
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/admin/users',
    children: [
      {
        path: 'users',
        name: 'AdminUsers',
        component: AdminUsers
      },
      {
        path: 'projects',
        name: 'AdminProjects',
        component: AdminProjects
      }
    ]
  },
  // Ruta por defecto - redirige a Home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

