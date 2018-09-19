import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/layout/Layout'
import JobPlaza from '@/pages/job/jobPlaza'

import HeaderBar from '@/pages/layout/HeaderBar'
import FooterBar from '@/pages/layout/FooterBar'

import LoginPage from '@/pages/user/LoginPage'
import RegisterPage from '@/pages/user/RegisterPage'
import myProfile from '@/pages/user/myProfile'

import taskNew from '@/pages/task/taskNew'
import taskPage from '@/pages/task/taskPage'
import taskDetail from '@/pages/task/taskDetail'
import taskEdit from '@/pages/task/taskEdit'
import taskFreelancer from '@/pages/task/taskFreelancer'

import jobDetail from '@/pages/job/jobDetail'
import jobApplyForm from '@/pages/job/jobApplyForm'
import applyJobSuccess from '@/pages/job/applyJobSuccess'

import adminUserPage from '@/pages/admin/adminUserPage'

import secretaryUserPage from '@/pages/secretary/secretaryUserPage'


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
            token: true
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
          path:'taskEdit/:taskId',
          name:'taskEdit',
          components:{
            head:HeaderBar,
            content:taskEdit,
            footer:FooterBar
          },
          meta:{
            title:'TaskEdit',
            token:true
          }
        },
        {
          path:'taskFreelancer/:taskId',
          name:'taskFreelancer',
          components:{
            head:HeaderBar,
            content:taskFreelancer,
            footer:FooterBar
          },
          meta:{
            title:'TaskFreelancer',
            token:true
          }
        },
        {
          path:'jobDetail/:jobId',
          name:'jobDetail',
          components:{
            head:HeaderBar,
            content:jobDetail,
            footer:FooterBar
          },
          meta:{
            title:'JobDetail',
            token:false
          }
        },
        {
          path:'jobApplyForm',
          name:'jobApplyForm',
          components:{
            head:HeaderBar,
            content:jobApplyForm,
            footer:FooterBar
          },
          meta:{
            title:'JobApplyForm',
            token:true
          }
        },
        {
          path:'applyJobSuccess',
          name:'applyJobSuccess',
          components:{
            head:HeaderBar,
            content:applyJobSuccess,
            footer:FooterBar
          },
          meta:{
            title:'ApplyJobSuccess',
            token:true
          }
        },
        {
          path:'adminUserPage',
          name:'adminUserPage',
          components:{
            head:HeaderBar,
            content:adminUserPage,
            foot:FooterBar
          },
          meta:{
            title:'AdminUserPage',
            token:true
          }
        },
        {
          path:'myProfile',
          name:'myProfile',
          components:{
            head:HeaderBar,
            content:myProfile,
            footer:FooterBar
          },
          meta:{
            title:'MyProfile',
            token:true
          }
        },
        {
          path:'secretaryUserPage',
          name:'secretaryUserPage',
          components:{
            head:HeaderBar,
            content:secretaryUserPage,
            footer:FooterBar
          },
          meta:{
            title:'SecretaryUserPage',
            token:true
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
          name:'jobPlaza'
        })
      }
    } else {
      if (to.meta.token) {
        if (!store.state.token) {
          if (to.name === 'login') {
            store.dispatch('saveToUrl', '');
          } else {
            const toPath={
              name:to.name,
              params:to.params
            };
            store.dispatch('saveToUrl', toPath);
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
