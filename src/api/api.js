import axios from 'axios';
import store from '../store/index'

let host = 'http://gogorpg.com:9527';
// let host = 'http://localhost:9527';

///////////////////////////////////////////////////////////////////////////////////////////
export const apiPublishNewJob = params => {
  return axios.post(`${host}/task/publish/publishNewJob`, params, {
    headers: {
      token: store.state.token
    }
  })
};
export const apiGetJobDetail = params => {
  return axios.get(`${host}/job/detail/` + params, {
    headers: {
      token: store.state.token
    }
  });
};
export const applyJob = params => {
  return axios.post(`${host}/job/myApply/applyJob`, params, {
    headers: {
      token: store.state.token
    }
  })
};
export const loadMyApplyJob = params => {
  return axios.get(`${host}/job/myApply/loadMyApplyJob`, {
    headers: {
      "token": store.state.token
    }
  })
};
export const apiListJobToMatch = params => {
  return axios.post(`${host}/secretary/listJobToMatch`, params, {
    headers: {
      token: store.state.token
    }
  })
};
export const loadUsersAppliedJobAndWaiting = params => {
  return axios.post(`${host}/secretary/listUserApplyJob`, params, {
    headers: {
      token: store.state.token
    }
  })
};
export const addNewJobMatch = params => {
  return axios.post(`${host}/secretary/matchJobToUser`, params, {
    headers: {
      token: store.state.token
    }
  })
};
export const loadMyNewJob = params => {
  return axios.get(`${host}/job/myMatch/loadJobMatchToMe`, {
    headers: {
      token: store.state.token
    }
  })
};
export const acceptNewJob = params => {
  return axios.post(`${host}/job/myMatch/acceptNewJob`, params, {
    headers: {
      token: store.state.token
    }
  })
};
export const rejectNewJob = params => {
  return axios.post(`${host}/job/myMatch/rejectNewJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const loadMyPartyAJob = params => {
  return axios.post(`${host}/job/partyA/loadMyPartyAJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const loadMyPartyBJob = params => {
  return axios.post(`${host}/job/partyB/loadMyPartyBJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const createLog = params => {
  return axios.post(`${host}/job/log/createLog`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const jobLog = params => {
  return axios.post(`${host}/job/log/jobLog`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const loadUnreadByJobId = params => {
  return axios.post(`${host}/job/detail/loadUnreadByJobId`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const setJobLogReadTime = params => {
  return axios.post(`${host}/job/log/setJobLogReadTime`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const loadCompletList = params => {
  return axios.post(`${host}/job/complete/loadCompleteList`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const createCompleteApi = params => {
  return axios.post(`${host}/job/complete/createComplete`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const setCompleteReadTime = params => {
  return axios.post(`${host}/job/complete/setCompleteReadTime`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const rejectComplete = params => {
  return axios.post(`${host}/job/complete/rejectComplete`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const acceptComplete = params => {
  return axios.post(`${host}/job/complete/acceptComplete`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const apiGetJobDetailTiny = params => {
  return axios.get(`${host}/job/detail/tiny/` + params, {
    headers: {
      token: store.state.token
    }
  })
}
export const loadStopList = params => {
  return axios.post(`${host}/job/stop/loadStopList`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const createStopAPI = params => {
  return axios.post(`${host}/job/stop/createStop`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const rejectStop = params => {
  return axios.post(`${host}/job/stop/rejectStop`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const acceptStop = params => {
  return axios.post(`${host}/job/stop/acceptStop`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const setStopReadTime = params => {
  return axios.post(`${host}/job/stop/setStopReadTime`, params, {
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
export const apiListSubTask = params => {
  return axios.post(`${host}/task/listSubTask`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const apiCreateSubTask = params => {
  return axios.post(`${host}/task/createSubTask`, params, {
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
  return axios.post(`${host}/task/update`, params, {
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
export const apiSaveContactInfo = params => {
  return axios.post(`${host}/user/info/saveContactInfo`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const apiListMyPendingJob = params => {
  return axios.post(`${host}/mypending/listMyPendingJob`, params, {
    headers: {
      token: store.state.token
    }
  })
};
export const apiListPublicJob = params => {
  return axios.post(`${host}/job/plaza/publicJob`, params, {
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
export const apiGetTaskTinyByTaskId = params => {
  return axios.post(`${host}/task/getTaskTinyByTaskId`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const apiUpdatePendingJob = params => {
  return axios.post(`${host}/mypending/updatePendingJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const apiDeletePendingJob = params => {
  return axios.post(`${host}/mypending/deletePendingJob`, params, {
    headers: {
      token: store.state.token
    }
  })
}
export const apiListMyAccount=params=>{
  return axios.post(`${host}/account/listMyAccount`, params, {
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
export const apiListJobMatching=params=>{
  return axios.post(`${host}/secretary/match/listJobMatching`, params, {
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
export const apiRejectApply=params=>{
  return axios.post(`${host}/secretary/match/rejectApply`, params,{
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
export const apiCreateSpotlight=params=>{
  return axios.post(`${host}/job/mySpotlight/create`, params, {
    headers:{
      token:store.state.token
    }
  })
}
export const apiListSpotlight=params=>{
  return axios.post(`${host}/job/mySpotlight/list`, params, {
    headers:{
      token:store.state.token
    }
  })
}
export const apiSpotlightDetail=params=>{
  return axios.get(`${host}/spotlight/detail/`+params)
}
export const apiListSpotlightPlaza=params=>{
  return axios.post(`${host}/spotlight/list`, params)
}
/////////////////////////////////////////////////////////////////////////////////////////

export const loadUserInfo = params => {
  return axios.get(`${host}/user/userInfo`, {
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


/**
 * read task tiny info from db, not contain detail
 * @param params
 * @returns {AxiosPromise<any>}
 */
export const ApiGetTaskTinyByTaskId = params => {
  return axios.post(`${host}/task/getTaskTinyByTaskId`, params, {
    headers: {
      token: store.state.token
    }
  })
}

export const publishTask = params => {
  return axios.post(`${host}/job/publish`, params, {
    headers: {
      "token": store.state.token
    }
  })
};


/**
 * 管理员登录接口
 * @param params
 * @returns {AxiosPromise<any>}
 */
export const adminLogin = params => {
  return axios.post(`${host}/admin/login`, params);
}

export const loadAdmins = params => {
  return axios.get(`${host}/admin/admin`, {
    headers: {
      token: store.state.token
    }
  })
};

export const loadRoleType = params => {
  return axios.get(`${host}/admin/roleType`, {
    headers: {
      token: store.state.token
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


/////////////////////////////////////////////////////////////////////


export const loadUser = params => {
  return axios.post(`${host}/user/login`, params)
};










