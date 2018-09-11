import axios from 'axios';

let host = 'http://localhost:9527';

export const loadJobs=params=>{
  return axios.get(`${host}/task/public`)
};

export const login = params => {
  return axios.post(`${host}/login/`, params)
};

export const register = params => {
  return axios.post(`${host}/users/`, params)
};

export const apiGetTasks = params => {
  return axios.get(`${host}/tasks/`, params)
};


