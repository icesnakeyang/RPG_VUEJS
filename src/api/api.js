import axios from 'axios';
import store from '../store/index'

// let host = 'http://gogorpg.com:9527';
let host = 'http://localhost:9527';

///////////////////////////////////////////////////////////////////////////////////////////
/**
 * register with email
 * @param params
 * @returns {AxiosPromise<any>}
 */
export const apiRegisterByEmail = params => {
  return axios.post(`${host}/user/register/registerByEmail`, params)
}

export const apiListPublicJob = params => {
  return axios.post(`${host}/public_job/listPublicJob`, params)
}

export const apiLogin = params => {
  return axios.post(`${host}/user/login/login`, params)
}

export const apiGetEmailByEmail = params => {
  return axios.post(`${host}/user/register/getEmailByEmail`, params)
}

export const apiCreateTask = params => {
  return axios.post(`${host}/task/createTask`, params, {
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
  return axios.post(`${host}/spotlight/listSpotlight`, params)
}

export const apiListMyTask = params => {
  return axios.post(`${host}/task/listMyTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetTaskDetailByTaskId = params => {
  return axios.post(`${host}/task/getTaskDetailByTaskId`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiCountSubTask = params => {
  return axios.post(`${host}/task/countSubTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListTaskBreadcrumb = params => {
  return axios.post(`${host}/task/listTaskBreadcrumb`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiDeleteTask = params => {
  return axios.post(`${host}/task/deleteTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiUpdateTask = params => {
  return axios.post(`${host}/task/updateTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiGetTaskTinyByTaskId = params => {
  return axios.post(`${host}/task/getTaskTinyByTaskId`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const apiListSubTask=params=>{
  return axios.post(`${host}/task/listSubTask`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiCreateSubTask=params=>{
  return axios.post(`${host}/task/createSubTask`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiPublishNewJob=params=>{
  return axios.post(`${host}/task/publishNewJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetPublicJobDetail=params=>{
  return axios.get(`${host}/public_job/`+ params)
}

export const apiGetUserInfo=params=>{
  return axios.post(`${host}/user/profile/getUserInfo`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiSaveContactInfo=params=>{
  return axios.post(`${host}/user/profile/saveContactInfo`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiApplyJob=params=>{
  return axios.post(`${host}/job/myApply/applyJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListMyApplyJob=params=>{
  return axios.post(`${host}/job/myApply/listMyApplyJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListMyPendingJob=params=>{
  return axios.post(`${host}/mypending/listMyPendingJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetMyPendingJob=params=>{
  return axios.post(`${host}/mypending/getMyPendingJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiDeletePendingJob=params=>{
  return axios.post(`${host}/mypending/deletePendingJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetMyApplyJob=params=>{
  return axios.post(`${host}/job/myApply/getMyApplyJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListApplyByJobId=params=>{
  return axios.post(`${host}/secretary/match/listApplyByJobId`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetApplyJobTiny=params=>{
  return axios.post(`${host}/secretary/match/getApplyJobTiny`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetApplyJobDetail=params=>{
  return axios.post(`${host}/secretary/match/getApplyJobDetail`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiAdminLogin=params=>{
  return axios.post(`${host}/admin/login`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiAgreeApply=params=>{
  return axios.post(`${host}/secretary/match/agreeApply`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiRejectApply=params=>{
  return axios.post(`${host}/secretary/match/rejectApply`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListAppliedJob=params=>{
  return axios.post(`${host}/secretary/match/listAppliedJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListApplyHistory=params=>{
  return axios.post(`${host}/secretary/match/listApplyHistory`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetApplyDetail=params=>{
  return axios.post(`${host}/secretary/match/getApplyDetail`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListMyPartyAJob=params=>{
  return axios.post(`${host}/job/partyA/listMyPartyAJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetPartyAJob=params=>{
  return axios.post(`${host}/job/partyA/getPartyAJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiTotalUnreadByJobId=params=>{
  return axios.post(`${host}/job/partyA/totalUnreadByJobId`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListMyPartyBJob=params=>{
  return axios.post(`${host}/job/partyB/listMyPartyBJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetPartyBJobDetail=params=>{
  return axios.post(`${host}/job/partyB/getPartyBJobDetail`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiJobLog=params=>{
  return axios.post(`${host}/job/log/jobLog`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiSetJobLogReadTime=params=>{
  return axios.post(`${host}/job/log/setJobLogReadTime`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiCreateLog=params=>{
  return axios.post(`${host}/job/log/createLog`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListEmailOfUser=params=>{
  return axios.post(`${host}/user/profile/listEmailOfUser`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListPhoneOfUser=params=>{
  return axios.post(`${host}/user/profile/listPhoneOfUser`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetUserProfile=params=>{
  return axios.post(`${host}/user/profile/getUserProfile`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiSaveRealName=params=>{
  return axios.post(`${host}/user/profile/saveRealName`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListMyComplete=params=>{
  return axios.post(`${host}/job/complete/listMyComplete`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiGetJobTinyByJobId=params=>{
  return axios.post(`${host}/job/my_common/getJobTinyByJobId`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiSetCompleteReadTime=params=>{
  return axios.post(`${host}/job/complete/setCompleteReadTime`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiRejectComplete=params=>{
  return axios.post(`${host}/job/complete/rejectComplete`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiAcceptComplete=params=>{
  return axios.post(`${host}/job/complete/acceptComplete`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiCreateComplete=params=>{
  return axios.post(`${host}/job/complete/createComplete`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListMyPartyAAcceptJob=params=>{
  return axios.post(`${host}/job/complete/listMyPartyAAcceptJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiListMyPartyBAcceptJob=params=>{
  return axios.post(`${host}/job/complete/listMyPartyBAcceptJob`, params, {
    headers:{
      token:store.state.token
    }
  })
}

export const apiTotalMyUnread=params=>{
  return axios.post(`${host}/job/my_common/totalMyUnread`, params, {
    headers:{
      token:store.state.token
    }
  })
}








