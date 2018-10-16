import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/layout/Layout'
import JobPlaza from '@/pages/job/plaza/jobPlaza'

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
import jobApplyForm from '@/pages/job/myJob/applyJob/jobApplyForm'
import applyJobSuccess from '@/pages/job/myJob/applyJob/applyJobSuccess'
import myJobPage from '@/pages/job/myJob/myJobPage'
import myMatchJobDetail from '@/pages/job/myJob/matchJob/myMatchJobDetail'

import myApplyJob from '@/pages/job/myJob/applyJob/myApplyJob'

import adminPage from '@/pages/admin/adminPage'
import adminLogin from '@/pages/admin/adminLogin'
import secretaryTopUpPage from '@/pages/secretary/topUp/topUpPage'
import userTopUpPage from '@/pages/user/account/topUp/topUpPage'

import myMatchJobPage from '@/pages/job/myJob/matchJob/myMatchJobPage'
import secretaryMatchJobPage from '@/pages/secretary/match/secretaryMatchJobPage'

import partyAJobPage from '@/pages/job/myJob/partyA/partyAJobPage'
import partyAJobDetail from '@/pages/job/myJob/partyA/partyAJobDetail'
import partyBJobPage from '@/pages/job/myJob/partyB/partyBJobPage'
import partyBJobDetail from '@/pages/job/myJob/partyB/partyBJobDetail'
import jobLogPage from '@/pages/job/myJob/jobLog/jobLogPage'
import createJobLog from '@/pages/job/myJob/jobLog/createJobLog'

import completePage from '@/pages/job/myJob/complete/completePage'
import createComplete from '@/pages/job/myJob/complete/createComplete'


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
          path: 'taskEdit/:taskId',
          name: 'taskEdit',
          components: {
            head: HeadBarBase,
            content: taskEdit,
            footer: FooterBar
          },
          meta: {
            title: 'TaskEdit',
            token: true
          }
        },
        {
          path: 'taskFreelancer/:taskId',
          name: 'taskFreelancer',
          components: {
            head: HeadBarBase,
            content: taskFreelancer,
            footer: FooterBar
          },
          meta: {
            title: 'TaskFreelancer',
            token: true
          }
        },
        {
          path: 'jobDetail/:jobId',
          name: 'jobDetail',
          components: {
            head: HeadBarBase,
            content: jobDetail,
            footer: FooterBar
          },
          meta: {
            title: 'JobDetail',
            token: false
          }
        },
        {
          path: 'jobApplyForm',
          name: 'jobApplyForm',
          components: {
            head: HeadBarBase,
            content: jobApplyForm,
            footer: FooterBar
          },
          meta: {
            title: 'JobApplyForm',
            token: true
          }
        },
        {
          path: 'applyJobSuccess',
          name: 'applyJobSuccess',
          components: {
            head: HeadBarBase,
            content: applyJobSuccess,
            footer: FooterBar
          },
          meta: {
            title: 'ApplyJobSuccess',
            token: true
          }
        },
        {
          path: 'adminPage',
          name: 'adminPage',
          components: {
            head: HeadBarBase,
            content: adminPage,
            foot: FooterBar
          },
          meta: {
            title: 'AdminPage',
            token: true
          }
        },
        {
          path: 'myProfile',
          name: 'myProfile',
          components: {
            head: HeadBarBase,
            content: myProfile,
            footer: FooterBar
          },
          meta: {
            title: 'MyProfile',
            token: true
          }
        },
        {
          path: 'myMatchJobPage',
          name: 'myMatchJobPage',
          components: {
            head: HeadBarBase,
            content: myMatchJobPage,
            footer: FooterBar
          },
          meta: {
            title: "MyMatchJobPage",
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'secretaryMatchJobPage',
          name: 'secretaryMatchJobPage',
          components: {
            head: HeadBarBase,
            content: secretaryMatchJobPage,
            footer: FooterBar
          },
          meta: {
            title: "SecretaryMatchJobPage",
            token: true
          }
        },
        {
          path: 'myJobPage',
          name: 'myJobPage',
          components: {
            head: HeadBarBase,
            content: myJobPage,
            footer: FooterBar
          },
          meta: {
            title: "MyJobPage",
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'myApplyJob',
          name: 'myApplyJob',
          components: {
            head: HeadBarBase,
            content: myApplyJob,
            footer: FooterBar
          },
          meta: {
            title: "MyApplyJob",
            token: true
          }
        },
        {
          path: 'adminLogin',
          name: "adminLogin",
          components: {
            head: HeadBarBase,
            content: adminLogin,
            footer: FooterBar
          },
          meta: {
            title: "AdminLogin",
            token: false
          }
        },
        {
          path: 'myMatchJobDetail',
          name: 'myMatchJobDetail',
          components: {
            head: HeadBarBase,
            content: myMatchJobDetail,
            footer: FooterBar
          },
          meta: {
            title: 'MyMatchJobDetail',
            token: true
          }
        },
        {
          path: 'secretaryTopUpPage',
          name: 'secretaryTopUpPage',
          components: {
            head: HeadBarBase,
            content: secretaryTopUpPage,
            footer: FooterBar
          },
          meta: {
            title: 'SecretaryTopUpPage',
            token: true
          }
        },
        {
          path: 'userTopUpPage',
          name: 'userTopUpPage',
          components: {
            head: HeadBarBase,
            content: userTopUpPage,
            footer: FooterBar
          },
          meta: {
            title: 'userTopUpPage',
            token: true
          }
        },
        {
          path: 'partyAJobPage',
          name: 'partyAJobPage',
          components: {
            head: HeadBarBase,
            content: partyAJobPage,
            footer: FooterBar
          },
          meta: {
            title: 'PartyAJobPage',
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'partyBJobPage',
          name: 'partyBJobPage',
          components: {
            head: HeadBarBase,
            content: partyBJobPage,
            footer: FooterBar
          },
          meta: {
            title: 'PartyBJobPage',
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'partyAJobDetail',
          name: 'partyAJobDetail',
          components: {
            head: HeadBarBase,
            content: partyAJobDetail,
            footer: FooterBar
          },
          meta: {
            title: 'PartyAJobDetail',
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'partyBJobDetail',
          name: 'partyBJobDetail',
          components: {
            head: HeadBarBase,
            content: partyBJobDetail,
            footer: FooterBar
          },
          meta: {
            title: 'PartyBJobDetail',
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'jobLogPage',
          name: 'jobLogPage',
          components: {
            head: HeadBarBase,
            content: jobLogPage,
            footer: FooterBar
          },
          meta: {
            title: 'JobLogPage',
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'createJobLog',
          name: 'createJobLog',
          components: {
            head: HeadBarBase,
            content: createJobLog,
            footer: FooterBar
          },
          meta: {
            title: 'CreateJobLog',
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'completePage',
          name: 'completePage',
          components: {
            head: HeadBarBase,
            content: completePage,
            footer: FooterBar
          },
          meta: {
            title: 'CompletePage',
            token: true,
            menuType: "job"
          }
        },
        {
          path: 'createComplete',
          name: 'createComplete',
          components: {
            head: HeadBarBase,
            content: createComplete,
            footer: FooterBar
          },
          meta: {
            title: 'CreateComplete',
            token: true,
            menuType: "job"
          }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to) {
    if (!to.name) {
      if (to.path === '/') {
        next({
          name: 'jobPlaza'
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
