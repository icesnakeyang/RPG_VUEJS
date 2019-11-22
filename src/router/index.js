import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

/**
 * layout
 */
import headerBarBase from '@/pages/layout/header/headerBarBase'
import footerBar from '@/pages/layout/footerBar'

/**
 * user
 */
import loginPage from '@/pages/user/login/loginPage'
import registerByEmail from '@/pages/user/register/registerByEmail'
//profile
import profileDashboard from '@/pages/user/profile/profileDashboard'
import submitUserProfile from '@/pages/user/profile/submitUserProfile'

/**
 * task
 */
import taskCreateNew from '@/pages/task/taskCreateNew'
import taskPage from '@/pages/task/taskPage'
import taskDetail from '@/pages/task/taskDetail'
import taskEdit from '@/pages/task/taskEdit'
import subTaskPage from '@/pages/task/subTaskPage'
import taskFreelancer from '@/pages/task/taskFreelancer'

/**
 * job
 */
// public
import publicJobPage from '@/pages/job/publicJob/publicJobPage'
import publicJobDetail from '@/pages/job/publicJob/publicJobDetail'

// apply
import jobApplyForm from '@/pages/job/myJob/applyJob/jobApplyForm'
import applyJobSuccess from '@/pages/job/myJob/applyJob/applyJobSuccess'
import myApplyJob from '@/pages/job/myJob/applyJob/myApplyJob'
import myApplyJobDetail from '@/pages/job/myJob/applyJob/myApplyJobDetail'

// detail
import jobDetail from '@/pages/job/myJob/detail/jobDetail'

// pending
import myPendingJobPage from '@/pages/job/myJob/myPendingJob/myPendingJobPage'
import myPendingJobDetail from '@/pages/job/myJob/myPendingJob/myPendingJobDetail'
import myPendingJobUpdate from '@/pages/job/myJob/myPendingJob/myPendingJobUpdate'

//partyA
import partyAJobPage from '@/pages/job/myJob/partyA/partyAJobPage'
import partyAJobDetail from '@/pages/job/myJob/partyA/partyAJobDetail'

//partyB
import partyBJobPage from '@/pages/job/myJob/partyB/partyBJobPage'
import partyBJobDetail from '@/pages/job/myJob/partyB/partyBJobDetail'

//job log
import jobLogPage from '@/pages/job/myJob/jobLog/jobLogPage'
import createJobLog from '@/pages/job/myJob/jobLog/createJobLog'

//job complete
import completePage from '@/pages/job/myJob/complete/completePage'
import createComplete from '@/pages/job/myJob/complete/createComplete'
import myAcceptJobPage from '@/pages/job/myJob/complete/myAcceptJobPage'

/**
 * spotlight
 */

/**
 * Admin
 */
import adminLogin from '@/pages/admin/adminLogin'

/**
 * Secretary
 */
import secretaryApplyPage from '@/pages/secretary/match/secretaryApplyPage'
import secretaryDashboard from '@/pages/secretary/secretaryDashboard'
import secretaryAppliedJobList from '@/pages/secretary/match/secretaryAppliedJobList'
import userApplyHistoryPage from '@/pages/secretary/match/userApplyHistoryPage'
import userApplyHistoryDetail from '@/pages/secretary/match/userApplyHistoryDetail'

/**
 * my account
 */
import myAccountPage from '@/pages/account/myAccountPage'
import myAccountDashboard from '@/pages/account/myAccountDashboard'

/**
 * my honor
 */
import myHonorDashboard from '@/pages/honor/myHonorDashboard'
import myHonorList from '@/pages/honor/myHonorList'

import indexPage from '../pages/layout/index'
import contentPage from "../pages/layout/contentPage";
import baseHeader from "../pages/layout/header/baseHeader";
import baseSider from "../pages/layout/header/baseSider";
import guestLayout from "../pages/layout/guestLayout";
import findPassword from "../pages/user/password/findPassword";
import registerByPhone from "../pages/user/register/registerByPhone";

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
              content: loginPage,
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
              content: publicJobPage,
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
              content: taskCreateNew,
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
              content: registerByEmail,
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
              content: taskPage,
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
              content: taskDetail,
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
              content: taskEdit,
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
              content: subTaskPage,
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
              content: taskFreelancer,
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
              content: publicJobDetail,
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
              content: jobApplyForm,
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
              content: applyJobSuccess,
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
              content: myApplyJob,
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
              content: jobDetail,
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
              content: myPendingJobPage,
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
              content: myPendingJobDetail,
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
              content: myApplyJobDetail,
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
              content: secretaryApplyPage,
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
              content: adminLogin,
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
              content: secretaryDashboard,
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
              content: secretaryAppliedJobList,
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
              content: userApplyHistoryPage,
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
              content: userApplyHistoryDetail,
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
              content: partyAJobPage,
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
              head: headerBarBase,
              content: partyAJobDetail,
              footerBar: footerBar
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
              content: partyBJobPage,
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
              head: headerBarBase,
              content: partyBJobDetail,
              footerBar: footerBar
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
              head: headerBarBase,
              content: jobLogPage,
              footerBar: footerBar
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
              head: headerBarBase,
              content: createJobLog,
              footerBar: footerBar
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
              content: profileDashboard,
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
              content: submitUserProfile,
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
              head: headerBarBase,
              content: completePage,
              footerBar: footerBar
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
              head: headerBarBase,
              content: createComplete,
              footerBar: footerBar
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
              content: myAcceptJobPage,
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
              head: headerBarBase,
              content: myPendingJobUpdate,
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
              content: myAccountPage,
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
              content: myAccountDashboard,
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
              content: myHonorList,
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
              content: myHonorDashboard,
              footer: footerBar
            },
            meta: {
              title: 'myHonorDashboard',
              token: true
            }
          },
          {
            path: 'contentPage',
            name: 'contentPage',
            components: {
              header: baseHeader,
              sider: baseSider,
              content: contentPage,
              footer: footerBar
            },
            meta: {
              title: 'contentPage',
              token: false
            }
          },
          {
            path: 'findPassword',
            name: 'findPassword',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: findPassword,
              footer: footerBar
            }
          },
          {
            path: 'registerByPhone',
            name: 'registerByPhone',
            components: {
              head: baseHeader,
              sider: baseSider,
              content: registerByPhone,
              footer: footerBar
            }
          }
        ]
      }
    ]
  })
;

router.beforeEach((to, from, next) => {
  if (to) {
    console.log(to)
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
