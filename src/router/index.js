import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

/**
 * layout
 */
import headerBarBase from '@/pages/layout/header/headerBarBase'
import footerBar from '@/pages/layout/footerBar'
import indexPage from '../pages/layout/index'
import baseHeader from "../pages/layout/header/baseHeader";
import baseSider from "../pages/layout/header/baseSider";
import homeLayout from "../pages/layout/homeLayout";


Vue.use(Router);

const router = new Router({
    routes: [
      {
        path: '/app',
        component: indexPage,
        children: [
          {
            path: 'loginPage',
            name: 'loginPage',
            components: {
              head: baseHeader,
              content: () => import('@/pages/user/login/loginPage'),
              footer: footerBar
            },
            meta: {
              title: 'Login',
              token: false
            }
          },
          {
            path: 'publicJobPage',
            name: 'publicJobPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/publicJob/publicJobPage'),
              // content: publicJobPage,
              footer: footerBar
            },
            meta: {
              title: 'publicJobPage',
              token: false
            }
          },
          {
            path: 'taskCreateNew',
            name: 'taskCreateNew',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/task/taskCreateNew'),
              footer: footerBar
            },
            meta: {
              title: 'taskCreateNew',
              token: true
            }
          },
          {
            path: 'registerByEmail',
            name: 'registerByEmail',
            components: {
              head: baseHeader,
              content: () => import('@/pages/user/register/registerByEmail'),
              footer: footerBar
            },
            meta: {
              title: 'registerByEmail',
              token: false
            }
          },
          {
            path: 'taskPage',
            name: 'taskPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/task/taskPage'),
              footer: footerBar
            },
            meta: {
              title: 'taskPage',
              token: false
            }
          },
          {
            path: 'taskDetail',
            name: 'taskDetail',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/task/taskDetail'),
              footer: footerBar
            },
            meta: {
              title: 'taskDetail',
              token: false
            }
          },
          {
            path: 'taskEdit',
            name: 'taskEdit',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/task/taskEdit'),
              footer: footerBar
            },
            meta: {
              title: 'taskEdit',
              token: false
            }
          },
          {
            path: 'subTaskPage',
            name: 'subTaskPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/task/subTaskPage'),
              footer: footerBar
            },
            meta: {
              title: 'subTaskPage',
              token: false
            }
          },
          {
            path: 'taskFreelancer',
            name: 'taskFreelancer',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/task/taskFreelancer'),
              footer: footerBar
            },
            meta: {
              title: 'taskFreelancer',
              token: false
            }
          },
          {
            path: 'publicJobDetail/:jobId',
            name: 'publicJobDetail',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/publicJob/publicJobDetail'),
              footer: footerBar
            },
            meta: {
              title: 'publicJobDetail',
              token: false
            }
          },
          {
            path: 'jobApplyForm',
            name: 'jobApplyForm',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/applyJob/jobApplyForm'),
              footer: footerBar
            },
            meta: {
              title: 'jobApplyForm',
              token: true
            }
          },
          {
            path: 'applyJobSuccess',
            name: 'applyJobSuccess',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/applyJob/applyJobSuccess'),
              footer: footerBar
            },
            meta: {
              title: 'applyJobSuccess',
              token: true
            }
          },
          {
            path: 'myApplyJob',
            name: 'myApplyJob',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/applyJob/myApplyJob'),
              footer: footerBar
            },
            meta: {
              title: 'myApplyJob',
              token: true
            }
          },
          {
            path: 'jobDetail',
            name: 'jobDetail',
            components: {
              head: headerBarBase,
              content: () => import('@/pages/job/myJob/detail/jobDetail'),
              footerBar: footerBar
            },
            meta: {
              title: 'jobDetail',
              token: true
            }
          },
          {
            path: 'myPendingJobPage',
            name: 'myPendingJobPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/myPendingJob/myPendingJobPage'),
              footer: footerBar
            },
            meta: {
              title: 'myPendingJobPage',
              token: true
            }
          },
          {
            path: 'myPendingJobDetail',
            name: 'myPendingJobDetail',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/myPendingJob/myPendingJobDetail'),
              footer: footerBar
            },
            meta: {
              title: 'myPendingJobDetail',
              token: true
            }
          },
          {
            path: 'myApplyJobDetail',
            name: 'myApplyJobDetail',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/applyJob/myApplyJobDetail'),
              footer: footerBar
            },
            meta: {
              title: 'myApplyJobDetail',
              token: true
            }
          },
          {
            path: 'secretaryApplyPage',
            name: 'secretaryApplyPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/secretary/match/secretaryApplyPage'),
              footer: footerBar
            },
            meta: {
              title: 'secretaryApplyPage',
              token: true
            }
          },
          {
            path: 'adminLogin',
            name: 'adminLogin',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/admin/adminLogin'),
              footer: footerBar
            },
            meta: {
              title: 'adminLogin',
              token: false
            }
          },
          {
            path: 'secretaryDashboard',
            name: 'secretaryDashboard',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/secretary/secretaryDashboard'),
              footer: footerBar
            },
            meta: {
              title: 'secretaryDashboard',
              token: true
            }
          },
          {
            path: 'secretaryAppliedJobList',
            name: 'secretaryAppliedJobList',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/secretary/match/secretaryAppliedJobList'),
              footer: footerBar
            },
            meta: {
              title: 'secretaryAppliedJobList',
              token: true
            }
          },
          {
            path: 'userApplyHistoryPage',
            name: 'userApplyHistoryPage',
            components: {
              head: headerBarBase,
              content: () => import('@/pages/secretary/match/userApplyHistoryPage'),
              footerBar: footerBar
            },
            meta: {
              title: 'userApplyHistoryPage',
              token: true
            }
          },
          {
            path: 'userApplyHistoryDetail',
            name: 'userApplyHistoryDetail',
            components: {
              head: headerBarBase,
              content: () => import('@/pages/secretary/match/userApplyHistoryDetail'),
              footerBar: footerBar
            },
            meta: {
              title: 'userApplyHistoryDetail',
              token: true
            }
          },
          {
            path: 'partyAJobPage',
            name: 'partyAJobPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/partyA/partyAJobPage'),
              footer: footerBar
            },
            meta: {
              title: 'partyAJobPage',
              token: true
            }
          },
          {
            path: 'partyAJobDetail',
            name: 'partyAJobDetail',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/partyA/partyAJobDetail'),
              footer: footerBar
            },
            meta: {
              title: 'partyAJobDetail',
              token: true
            }
          },
          {
            path: 'partyBJobPage',
            name: 'partyBJobPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/partyB/partyBJobPage'),
              footer: footerBar
            },
            meta: {
              title: 'partyBJobPage',
              token: true
            }
          },
          {
            path: 'partyBJobDetail',
            name: 'partyBJobDetail',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/partyB/partyBJobDetail'),
              footer: footerBar
            },
            meta: {
              title: 'partyBJobDetail',
              token: true
            }
          },
          {
            path: 'jobLogPage',
            name: 'jobLogPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/jobLog/jobLogPage'),
              footer: footerBar
            },
            meta: {
              title: 'jobLogPage',
              token: true
            }
          },
          {
            path: 'createJobLog',
            name: 'createJobLog',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/jobLog/createJobLog'),
              footer: footerBar
            },
            meta: {
              title: 'createJobLog',
              token: true
            }
          },
          {
            path: 'profileDashboard',
            name: 'profileDashboard',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/user/profile/profileDashboard'),
              footer: footerBar
            },
            meta: {
              title: 'profileDashboard',
              token: true
            }
          },
          {
            path: 'submitUserProfile',
            name: 'submitUserProfile',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/user/profile/submitUserProfile'),
              footer: footerBar
            },
            meta: {
              title: 'submitUserProfile',
              token: true
            }
          },
          {
            path: 'completePage',
            name: 'completePage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/complete/completePage'),
              footer: footerBar
            },
            meta: {
              title: 'completePage',
              token: true
            }
          },
          {
            path: 'createComplete',
            name: 'createComplete',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/complete/createComplete'),
              footer: footerBar
            },
            meta: {
              title: 'createComplete',
              token: true
            }
          },
          {
            path: 'myAcceptJobPage',
            name: 'myAcceptJobPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/complete/myAcceptJobPage'),
              footer: footerBar
            },
            meta: {
              title: 'myAcceptJobPage',
              token: true
            }
          },
          {
            path: 'myPendingJobUpdate',
            name: 'myPendingJobUpdate',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/job/myJob/myPendingJob/myPendingJobUpdate'),
              footerBar: footerBar
            },
            meta: {
              title: 'myPendingJobUpdate',
              token: true
            }
          },
          {
            path: 'myAccountPage',
            name: 'myAccountPage',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/account/myAccountPage'),
              footer: footerBar
            },
            meta: {
              title: 'myAccountPage',
              token: true
            }
          },
          {
            path: 'myAccountDashboard',
            name: 'myAccountDashboard',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/account/myAccountDashboard'),
              footer: footerBar
            },
            meta: {
              title: 'myAccountDashboard',
              token: true
            }
          },
          {
            path: 'myHonorList',
            name: 'myHonorList',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/honor/myHonorList'),
              footer: footerBar
            },
            meta: {
              title: 'myHonorList',
              token: true
            }
          },
          {
            path: 'myHonorDashboard',
            name: 'myHonorDashboard',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('@/pages/honor/myHonorDashboard'),
              footer: footerBar
            },
            meta: {
              title: 'myHonorDashboard',
              token: true
            }
          },
          {
            path: 'findPassword',
            name: 'findPassword',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('../pages/user/password/findPassword'),
              footer: footerBar
            }
          },
          {
            path: 'registerByPhone',
            name: 'registerByPhone',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('../pages/user/register/registerByPhone'),
              footer: footerBar
            }
          },
          {
            path: 'withdrawApply',
            name: 'withdrawApply',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: ()=>import('../pages/account/withdraw/withdrawApply'),
              footer: footerBar
            }
          }
        ]
      },
      {
        path: '/home',
        component: homeLayout,
        children: [
          {
            path: 'home',
            name: 'home',
            components: {
              head: baseHeader,
              content: () => import('../pages/home/home'),
              footer: footerBar
            }
          }
        ]
      },
      {
        path: '/admin',
        name: '/admin',
        component: indexPage,
        children: [
          {
            path: 'userActionLogList',
            name: 'userActionLogList',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: () => import('../pages/admin/userActionLog/userActionLogList'),
              footer: footerBar
            }
          }
        ],

      }
    ]
  })
;

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
