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
  return axios.post(`${host}/job/common/publishNewJob`, params, {
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











