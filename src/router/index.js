import Vue from 'vue'
import Router from 'vue-router'

import baseLayout from '@/pages/layout/baseLayout'
import publicJobPage from '@/pages/job/plaza/publicJobPage'

import headerBarBase from '@/pages/layout/header/headerBarBase'
import footerBar from '@/pages/layout/footerBar'

import loginPage from '@/pages/user/login/loginPage'
import spotlightPage from '@/pages/spotlight/spotlightPage'

import taskCreateNew from '@/pages/task/taskCreateNew'

import registerByEmail from '@/pages/user/register/registerByEmail'


import store from '../store/index'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/app',
      component: baseLayout,
      children: [
        {
          path: 'publicJobPage',
          name: 'publicJobPage',
          components: {
            head: headerBarBase,
            content: publicJobPage,
            footer: footerBar
          },
          meta: {
            title: 'publicJobPage',
            token: false
          }
        },
        {
          path: 'loginPage',
          name: 'loginPage',
          components: {
            head: headerBarBase,
            content: loginPage,
            footer: footerBar
          },
          meta: {
            title: 'Login',
            token: false
          }
        },
        {
          path:'spotlightPage',
          name:'spotlightPage',
          components:{
            head:headerBarBase,
            content:spotlightPage,
            footerBar:footerBar
          },
          meta:{
            title:'spotlightPage',
            token:false
          }
        },
        {
          path:'taskCreateNew',
          name:'taskCreateNew',
          components:{
            head:headerBarBase,
            content:taskCreateNew,
            footerBar:footerBar
          },
          meta:{
            title:'taskCreateNew',
            token:true
          }
        },
        {
          path:'registerByEmail',
          name:'registerByEmail',
          components:{
            head:headerBarBase,
            content:registerByEmail,
            footerBar:footerBar
          },
          meta:{
            title:'registerByEmail',
            token:false
          }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to) {
    if (!to.name) {
      //如果路由里name=null，即指用户是通过外部链接直接访问
      //输入域名访问，直接跳转到任务广场
      if (to.path === '/') {
        next({
          name: 'publicJobPage'
        })
      }
      //通过推广链接，直接访问任务详情页面
      //通过推广链接，直接访问某个申诉详情页面
      //用户直接访问申诉广场
      // if(to.path==='spotlightPage'){
      //   next()
      // }

    } else {
      //路由里name有指定值，则指用户是通过站内页面跳转访问
      //检测该指定页面是否需要用户token。即登录状态
      if (to.meta.token) {
        //需要token，检测token值是否存在
        if (!store.state.token) {
          //不存在token，跳转到登录页面，跳转前先保存访问路劲
          store.dispatch('saveToUrl', to);
          next({
            name: 'loginPage'
          })
        } else {
          //存在token，直接访问
          next()
        }
      } else {
        //不需要token，直接访问
        next()
      }
    }
  }
})

router.afterEach((to, from, next) => {
});

export default router;
