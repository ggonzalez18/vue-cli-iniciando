import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/blog/:post',
  name: 'Blog',
  component: Blog
},
{
  path: '/contacto',
  name: 'Contact',
  component: Contact
},
{
  path: '/servicio',
  name: 'Services',
  component: Services
},
{
  path: '/*',
  name: 'NotFound',
  component: NotFound
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
