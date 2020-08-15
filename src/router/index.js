import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import NotFound from '../views/NotFound.vue'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  alias: '/inicio'
},
{
  path: '/blog/:post',
  name: 'Blog',
  component: Blog,
  children: [
    {
      path: 'comentarios',
      name: 'Comments',
      component: Comments
    }
  ]
},
{
  path: '/contacto',
  name: 'Contact',
  component: Contact
},
{
  path: '/servicio',
  name: 'Services',
  redirect: '/experience'
},
{
  path: '/experience',
  name: 'Experience',
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
