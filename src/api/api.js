import axios from 'axios';
import store from '../store/index'

let host = 'https://gogorpg.com';
// let host = 'http://localhost:9527';

///////////////////////////////////////////////////////////////////////////////////////////
/**
 * register with email
 * @param params
 * @returns {AxiosPromise<any>}
 */
export const apiRegisterByEmail = params => {
  return axios.post(`${host}/rpgapi/user/registerByEmail`, params)
}

export const apiListPublicJob = params => {
  return axios.post(`${host}/rpgapi/public_job/listPublicJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiLogin = params => {
  return axios.post(`${host}/rpgapi/user/login`, params)
}

export const apiGetEmailByEmail = params => {
  return axios.post(`${host}/rpgapi/user/getEmailByEmail`, params)
}

export const apiCreateTask = params => {
  return axios.post(`${host}/rpgapi/task/createTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

/**
 * read all spotlight list
 * @param params
 * @returns {AxiosPromise<any>}
 */
export const apiListSpotlight = params => {
  return axios.post(`${host}/rpgapi/spotlight/listSpotlight`, params)
}

export const apiListMyTask = params => {
  return axios.post(`${host}/rpgapi/task/listMyTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetTaskDetailByTaskId = params => {
  return axios.post(`${host}/rpgapi/task/getTaskDetailByTaskId`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiCountSubTask = params => {
  return axios.post(`${host}/rpgapi/task/countSubTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListTaskBreadcrumb = params => {
  return axios.post(`${host}/rpgapi/task/listTaskBreadcrumb`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiDeleteTask = params => {
  return axios.post(`${host}/rpgapi/task/deleteTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiUpdateTask = params => {
  return axios.post(`${host}/rpgapi/task/updateTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetTaskTinyByTaskId = params => {
  return axios.post(`${host}/rpgapi/task/getTaskTinyByTaskId`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListSubTask = params => {
  return axios.post(`${host}/rpgapi/task/listSubTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiCreateSubTask = params => {
  return axios.post(`${host}/rpgapi/task/createSubTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiPublishNewJob = params => {
  return axios.post(`${host}/rpgapi/task/publishNewJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetPublicJobDetail = params => {
  return axios.get(`${host}/rpgapi/public_job/getJobDetail/` + params.jobId
    + '/' + params.ip + '/' + params.cityName)
}

export const apiGetUserInfo = params => {
  return axios.post(`${host}/rpgapi/user/profile/getUserInfo`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiSaveContactInfo = params => {
  return axios.post(`${host}/rpgapi/user/profile/saveContactInfo`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiApplyJob = params => {
  return axios.post(`${host}/rpgapi/job/myApply/applyJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyApplyJob = params => {
  return axios.post(`${host}/rpgapi/job/myApply/listMyApplyJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyPendingJob = params => {
  return axios.post(`${host}/rpgapi/mypending/listMyPendingJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetMyPendingJob = params => {
  return axios.post(`${host}/rpgapi/mypending/getMyPendingJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiDeletePendingJob = params => {
  return axios.post(`${host}/rpgapi/mypending/deletePendingJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetMyApplyJob = params => {
  return axios.post(`${host}/rpgapi/job/myApply/getMyApplyJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListApplyByJobId = params => {
  return axios.post(`${host}/rpgapi/secretary/match/listApplyByJobId`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetApplyJobTiny = params => {
  return axios.post(`${host}/rpgapi/secretary/match/getApplyJobTiny`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetApplyJobDetail = params => {
  return axios.post(`${host}/rpgapi/secretary/match/getApplyJobDetail`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiAdminLogin = params => {
  return axios.post(`${host}/rpgapi/admin/login`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiAgreeApply = params => {
  return axios.post(`${host}/rpgapi/secretary/match/agreeApply`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiRejectApply = params => {
  return axios.post(`${host}/rpgapi/secretary/match/rejectApply`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListAppliedJob = params => {
  return axios.post(`${host}/rpgapi/secretary/match/listAppliedJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListApplyHistory = params => {
  return axios.post(`${host}/rpgapi/secretary/match/listApplyHistory`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetApplyDetail = params => {
  return axios.post(`${host}/rpgapi/secretary/match/getApplyDetail`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyPartyAJob = params => {
  return axios.post(`${host}/rpgapi/job/partyA/listMyPartyAJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetPartyAJob = params => {
  return axios.post(`${host}/rpgapi/job/partyA/getPartyAJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyPartyBJob = params => {
  return axios.post(`${host}/rpgapi/job/partyB/listMyPartyBJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetPartyBJobDetail = params => {
  return axios.post(`${host}/rpgapi/job/partyB/getPartyBJobDetail`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListJobLog = params => {
  return axios.post(`${host}/rpgapi/job/log/listJobLog`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiSetJobLogReadTime = params => {
  return axios.post(`${host}/rpgapi/job/log/setJobLogReadTime`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiCreateLog = params => {
  return axios.post(`${host}/rpgapi/job/log/createLog`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListEmailOfUser = params => {
  return axios.post(`${host}/rpgapi/user/profile/listEmailOfUser`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListPhoneOfUser = params => {
  return axios.post(`${host}/rpgapi/user/profile/listPhoneOfUser`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetUserProfile = params => {
  return axios.post(`${host}/rpgapi/user/profile/getUserProfile`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiSaveRealName = params => {
  return axios.post(`${host}/rpgapi/user/profile/saveRealName`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyComplete = params => {
  return axios.post(`${host}/rpgapi/job/complete/listMyComplete`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetJobTinyByJobId = params => {
  return axios.post(`${host}/rpgapi/job/common/getJobTinyByJobId`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiSetCompleteReadTime = params => {
  return axios.post(`${host}/rpgapi/job/complete/setCompleteReadTime`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiRejectComplete = params => {
  return axios.post(`${host}/rpgapi/job/complete/rejectComplete`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiAcceptComplete = params => {
  return axios.post(`${host}/rpgapi/job/complete/acceptComplete`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiCreateComplete = params => {
  return axios.post(`${host}/rpgapi/job/complete/createComplete`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyPartyAAcceptJob = params => {
  return axios.post(`${host}/rpgapi/job/complete/listMyPartyAAcceptJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyPartyBAcceptJob = params => {
  return axios.post(`${host}/rpgapi/job/complete/listMyPartyBAcceptJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiTotalMyUnread = params => {
  return axios.post(`${host}/rpgapi/job/common/totalMyUnread`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiSetAcceptReadTime = params => {
  return axios.post(`${host}/rpgapi/job/complete/setAcceptReadTime`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiUpdatePendingJob = params => {
  return axios.post(`${host}/rpgapi/mypending/updatePendingJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyAccount = params => {
  return axios.post(`${host}/rpgapi/account/listMyAccount`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiLoadAccountBalance = params => {
  return axios.post(`${host}/rpgapi/account/loadAccountBalance`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyHonor = params => {
  return axios.post(`${host}/rpgapi/honor/listMyHonor`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiLoadUserHonorBalance = params => {
  return axios.post(`${host}/rpgapi/honor/loadUserHonorBalance`, params, {
    headers: {
      token: store.state.token
    }
  })
}

/**
 * 获取手机短信验证码
 * 必须上传一个手机号码
 * @param params
 * @returns {AxiosPromise<any>}
 */
export const apiGetPhoneVerifyCode = params => {
  return axios.post(`${host}/rpgapi/sms/getPhoneVerifyCode`, params)
}

export const apiResetPassword = params => {
  return axios.post(`${host}/rpgapi/admin/resetPassword`, params)
}

export const apiGetPhone = params => {
  return axios.post(`${host}/rpgapi/user/getPhone`, params)
}

export const apiRegisterByPhone = params => {
  return axios.post(`${host}/rpgapi/user/registerByPhone`, params)
}

export const apiListUserActionLog = params => {
  return axios.post(`${host}/rpgapi/admin/userActionLog/listUserActionLog`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiWithdraw = params => {
  return axios.post(`${host}/rpgapi/account/withdraw`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListWithdraw = params => {
  return axios.post(`${host}/rpgapi/account/listWithdraw`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListUserWithdrawApplys = params => {
  return axios.post(`${host}/rpgapi/admin/userWithdraw/listUserWithdrawApplys`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiDeleteJobLog = params => {
  return axios.post(`${host}/rpgapi/job/common/deleteJobLog`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetJobLog = params => {
  return axios.post(`${host}/rpgapi/job/common/getJobLog`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiUpdateMyJobLog = params => {
  return axios.post(`${host}/rpgapi/job/log/updateMyJobLog`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiCreateTeam = params => {
  return axios.post(`${host}/rpgapi/team/createTeam`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListMyTeam = params => {
  return axios.post(`${host}/rpgapi/team/listMyTeam`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetTeamDetail = params => {
  return axios.post(`${host}/rpgapi/team/getTeamDetail`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListUser = params => {
  return axios.post(`${host}/rpgapi/user/listUser`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiAddTeamMember = params => {
  return axios.post(`${host}/rpgapi/team/addTeamMember`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetoffTeamMember = params => {
  return axios.post(`${host}/rpgapi/team/getoffTeamMember`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListTeamMember = params => {
  return axios.post(`${host}/rpgapi/team/listTeamMember`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListRealnamePending = params => {
  return axios.post(`${host}/rpgapi/admin/realname/listRealnamePending`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetRealnamePending = params => {
  return axios.post(`${host}/rpgapi/admin/realname/getRealnamePending`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiRejectRealname = params => {
  return axios.post(`${host}/rpgapi/admin/realname/rejectRealname`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiAgreeRealname = params => {
  return axios.post(`${host}/rpgapi/admin/realname/agreeRealname`, params, {
    headers: {
      token: store.state.token
    }
  })
}





