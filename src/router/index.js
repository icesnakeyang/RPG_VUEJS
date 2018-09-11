import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/layout/Layout'
import JobPlaza from '@/pages/layout/jobPlaza'

import HeaderBar from '@/pages/layout/HeaderBar'
import FooterBar from '@/pages/layout/FooterBar'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/jobs',
      component: Layout,
      children: [
        {
          path: 'jobPlaza',
          name: 'jobPlaza',
          components: {
            head: HeaderBar,
            content: JobPlaza,
            // footer: FooterBar
          }
        }
      ]
    }
  ]
})
