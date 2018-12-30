import Vue from 'vue'
import Router from 'vue-router'
import store from "../store";

import baseLayout from '@/pages/layout/baseLayout'
import jobPlaza from '@/pages/job/plaza/jobPlaza'
import headerBarBase from '@/pages/layout/header/headerBarBase'
import footerBar from '@/pages/layout/footerBar'
import registerByEmail from '@/pages/user/register/registerByEmail'

import publicJobPage from '@/pages/job/plaza/publicJobPage'

Vue.use(Router)

const router=new Router({
  routes:[
    {
      path:'/',
      components:baseLayout,
      children:[
        {
          path:'publicJobPage',
          name:'publicJobPage',
          components: {
            head:headerBarBase,
            content:publicJobPage,
            footer:footerBar,
          },
          meta:{
            title:'publicJobPage',
            token:false
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to) {
    if (!to.name) {
      if (to.path === '/') {
        next({
          name: 'publicJobPage'
        })
      }
    } else {
      if (to.meta.token) {
        if (!store.state.token) {
          if (to.name === 'login') {
            store.dispatch('saveToUrl', '');
          } else {
            const toPath = {
              name: to.name,
              params: to.params
            };
            store.dispatch('saveToUrl', toPath);
          }
          next({
            path: '/login'
          })
        } else {
          next()
        }
      } else {
        next()
      }
    }
  }
});

export default router;
