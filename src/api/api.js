import axios from 'axios';
import store from '../store/index'

let host = 'http://localhost:9527';

export const registerUser=params=>{
  return axios.post(`${host}/user/create`, params,{
    headers:{
      "token":"token"
    }
  })
};

export const loadUser=params=>{
  return axios.post(`${host}/user/login`, params)
};

export const createTask=params=>{
  return axios.post(`${host}/task/create`,params,{
    headers:{
      "token":store.state.token
    }
  })
};

export const loadJobs=params=>{
  return axios.get(`${host}/task/public`)
};

export const loadTask=params=>{
  return axios.post(`${host}/task/mytask/`,params,{
    headers:{
      "token":store.state.token
    }
  });
};


