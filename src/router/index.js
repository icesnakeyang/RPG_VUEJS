import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/layout/Layout'
import JobPlaza from '@/pages/layout/jobPlaza'

import HeaderBar from '@/pages/layout/HeaderBar'
import FooterBar from '@/pages/layout/FooterBar'

import LoginPage from '@/pages/user/LoginPage'
import RegisterPage from '@/pages/user/RegisterPage'
import taskNew from '@/pages/task/taskNew'
import taskPage from '@/pages/task/taskPage'
import taskDetail from '@/pages/task/taskDetail'
import rpgPublic from '@/pages/job/rpgPublic'

import store from '../store/index'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/app',
      component: Layout,
      children: [
        {
          path: 'jobPlaza',
          name: 'jobPlaza',
          components: {
            head: HeaderBar,
            content: JobPlaza,
            footer: FooterBar
          },
          meta: {
            title: 'JobPlaza',
            token: false
          }
        },
        {
          path: 'login',
          name: 'login',
          components: {
            head: HeaderBar,
            content: LoginPage,
            footer: FooterBar
          },
          meta: {
            title: 'Login',
            token: false
          }
        },
        {
          path: 'register',
          name: 'register',
          components: {
            head: HeaderBar,
            content: RegisterPage,
            footer: FooterBar
          },
          meta: {
            title: 'Register',
            token: false
          }
        },
        {
          path: 'createTask',
          name: 'createTask',
          components: {
            head: HeaderBar,
            content: taskNew,
            footer: FooterBar
          },
          meta: {
            title: 'CreateTask',
            token: true
          }
        },
        {
          path: 'taskPage',
          name: 'taskPage',
          components: {
            head: HeaderBar,
            content: taskPage,
            footer: FooterBar
          },
          meta: {
            title: 'TaskPage',
            token: false
          }
        },
        {
          path: 'taskDetail/:taskId',
          name: 'taskDetail',
          components: {
            head: HeaderBar,
            content: taskDetail,
            footer: FooterBar
          },
          meta: {
            title: 'TaskDetail',
            token: false
          }
        },
        {
          path: 'rpgPublic',
          name:'rpgPublic',
          components: {
            head: HeaderBar,
            content: rpgPublic,
            footer: FooterBar
          },
          meta: {
            title: 'Home',
            token: false
          }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to) {
    console.log(to);
    if (!to.name) {
      if (to.path === '/') {
        next({
          name:'rpgPublic'
        })
      }
    } else {
      if (to.meta.token) {
        if (!store.state.token) {
          if (to.name === 'login') {
            store.dispatch('saveToUrl', '');
          } else {
            store.dispatch('saveToUrl', to.name);
          }
          next({
            path: '/app/login'
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

router.afterEach((to, from, next) => {
});

export default router;
