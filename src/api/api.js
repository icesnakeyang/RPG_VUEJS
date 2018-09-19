import axios from 'axios';
import store from '../store/index'

let host = 'http://localhost:9527';

export const registerUser = params => {
  return axios.post(`${host}/user/create`, params, {
    headers: {
      "token": "token"
    }
  })
};

export const loadUser = params => {
  return axios.post(`${host}/user/login`, params)
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
  return axios.get(`${host}/task/` + params, {
    headers: {
      "token": store.state.token
    }
  })
};

export const publishTask = params => {
  return axios.post(`${host}/job/publish`, params, {
    headers: {
      "token": store.state.token
    }
  })
};

export const loadPublicJobsByCategory = params => {
  return axios.get(`${host}/job/jobPlaza/` + params);
};

export const loadJobDetail = params => {
  return axios.get(`${host}/job/` + params);
};

export const loadUserInfo = params => {
  return axios.post(`${host}/user/profile`, params, {
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

export const setAdmin = params => {
  return axios.post(`${host}/user/setAdmin`, params, {
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

export const loadAdmins = params => {
  console.log(params);
  return axios.post(`${host}/user/loadAdmins`, params, {
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
