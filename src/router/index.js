import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/layout/Layout'
import JobPlaza from '@/pages/job/jobPlaza'

import HeadBarBase from '@/pages/layout/header/HeaderBarBase'
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
import myJobPage from '@/pages/job/myJob/myJobPage'
import newJobPage from '@/pages/job/myJob/newJob/newJobPage'
import newJobDetail from '@/pages/job/myJob/newJob/newJobDetail'

import myApplyJob from '@/pages/job/myJob/applyJob/myApplyJob'

import adminPage from '@/pages/admin/adminPage'
import adminLogin from '@/pages/admin/adminLogin'

import matchJobPage from '@/pages/secretary/matchJobPage'


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
            head: HeadBarBase,
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
            head: HeadBarBase,
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
            head: HeadBarBase,
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
            head: HeadBarBase,
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
            head: HeadBarBase,
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
            head: HeadBarBase,
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
            head:HeadBarBase,
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
            head:HeadBarBase,
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
            head:HeadBarBase,
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
            head:HeadBarBase,
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
            head:HeadBarBase,
            content:applyJobSuccess,
            footer:FooterBar
          },
          meta:{
            title:'ApplyJobSuccess',
            token:true
          }
        },
        {
          path:'adminPage',
          name:'adminPage',
          components:{
            head:HeadBarBase,
            content:adminPage,
            foot:FooterBar
          },
          meta:{
            title:'AdminPage',
            token:true
          }
        },
        {
          path:'myProfile',
          name:'myProfile',
          components:{
            head:HeadBarBase,
            content:myProfile,
            footer:FooterBar
          },
          meta:{
            title:'MyProfile',
            token:true
          }
        },
        {
          path:'matchJobPage',
          name:'matchJobPage',
          components:{
            head:HeadBarBase,
            content:matchJobPage,
            footer:FooterBar
          },
          meta:{
            title:"MatchJobPage",
            token:true
          }
        },
        {
          path:'myJobPage',
          name:'myJobPage',
          components:{
            head:HeadBarBase,
            content:myJobPage,
            footer:FooterBar
          },
          meta:{
            title:"MyJobPage",
            token:true,
            menuType:"job"
          }
        },
        {
          path:'newJobPage',
          name:'newJobPage',
          components:{
            head:HeadBarBase,
            content:newJobPage,
            footer:FooterBar
          },
          meta:{
            title:"NewJobPage",
            token:true
          }
        },
        {
          path:'myApplyJob',
          name:'myApplyJob',
          components:{
            head:HeadBarBase,
            content:myApplyJob,
            footer:FooterBar
          },
          meta:{
            title:"MyApplyJob",
            token:true
          }
        },
        {
          path:'adminLogin',
          name:"adminLogin",
          components:{
            head:HeadBarBase,
            content:adminLogin,
            footer:FooterBar
          },
          meta:{
            title:"AdminLogin",
            token:false
          }
        },
        {
          path:'newJobDetail',
          name:'newJobDetail',
          components:{
            head:HeadBarBase,
            content:newJobDetail,
            footer:FooterBar
          },
          meta:{
            title:'NewJobDetail',
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
