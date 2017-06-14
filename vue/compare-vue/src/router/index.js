import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import faq from '@/components/Faq'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/faq',
      name: 'Faq',
      component: faq
    }
  ]
})
