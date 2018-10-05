import axios from 'axios';
import store from '../store/index'

// let host = 'http://gogorpg.com:9527';
let host = 'http://localhost:9527';


export const loadPublicJobs = params => {
  return axios.get(`${host}/job/jobPlaza/`);
};

export const loadJobDetail = params => {
  return axios.get(`${host}/job/`+params);
};

export const loadUserInfo = params => {
  return axios.get(`${host}/user/userInfo`,{
    headers: {
      token: store.state.token
    }
  })
};

export const saveContactInfo = params => {
  return axios.post(`${host}/user/saveContactInfo`, params, {
    headers: {
      token: store.state.token
    }
  })
};

export const registerUser = params => {
  return axios.post(`${host}/user/register`, params, {
    headers: {
      "token": "token"
    }
  })
};

export const createTask = params => {
  return axios.post(`${host}/task/create`, params, {
    headers: {
      "token": store.state.token
    }
  })
};

export const loadTask = params => {
  return axios.post(`${host}/task/mytask/`, params, {
    headers: {
      "token": store.state.token
    }
  });
};

export const loadTaskDetail = params => {
  return axios.get(`${host}/task/` + params)
};

export const publishTask = params => {
  return axios.post(`${host}/job/publish`, params, {
    headers: {
      "token": store.state.token
    }
  })
};

export const loadMyApplyJob=params=>{
  return axios.get(`${host}/job/loadMyApplyJob`,{
    headers:{
      "token":store.state.token
    }
  })
};

/**
 * 管理员登录接口
 * @param params
 * @returns {AxiosPromise<any>}
 */
export const adminLogin=params=>{
  return axios.post(`${host}/admin/login`,params);
}

export const loadAdmins = params => {
  return axios.get(`${host}/admin/admin`, {
    headers: {
      token: store.state.token
    }
  })
};

export const loadRoleType=params=>{
  return axios.get(`${host}/admin/roleType`,{
    headers:{
      token:store.state.token
    }
  })
};


export const createAdmin = params => {
  return axios.post(`${host}/admin/create`, params, {
    headers: {
      token: store.state.token
    }
  })
};

export const loadJobToMatch=params=>{
  return axios.post(`${host}/admin/loadJobToMatch`,params,{
    headers:{
      token:store.state.token
    }
  })
};

export const loadUsersAppliedJobAndWaiting=params=>{
  return axios.post(`${host}/admin/loadUsersAppliedJobAndWaiting`, params,{
    headers:{
      token:store.state.token
    }
  })
};

export const addNewJobMatch=params=>{
  return axios.post(`${host}/admin/addNewJobMatch`, params, {
    headers:{
      token:store.state.token
    }
  })
};

export const loadMyNewJob=params=>{
  return axios.get(`${host}/job/loadMyNewJob`,{
    headers:{
      token:store.state.token
    }
  })
};

/////////////////////////////////////////////////////////////////////



export const loadUser = params => {
  return axios.post(`${host}/user/login`, params)
};

export const saveProfile = params => {
  return axios.post(`${host}/user/saveProfile`, params, {
    headers: {
      token: store.state.token
    }
  })
};

export const applyJob = params => {
  return axios.post(`${host}/job/applyJob`, params, {
    headers: {
      token: store.state.token
    }
  })
};


export const loadUsers = params => {
  console.log(params);
  return axios.post(`${host}/user/loadUsers`, params, {
    headers: {
      token: store.state.token
    }
  })
};



export const loadSecretary = params => {
  console.log(params);
  return axios.post(`${host}/user/loadSecretary`, params, {
    headers: {
      token: store.state.token
    }
  })
};

export const loadUnSecretary = params => {
  console.log(params);
  return axios.post(`${host}/user/loadUnSecretary`, params, {
    headers: {
      token: store.state.token
    }
  })
};

export const setSecretary = params => {
  return axios.post(`${host}/user/setSecretary`, params, {
    headers: {
      token: store.state.token
    }
  })
};








