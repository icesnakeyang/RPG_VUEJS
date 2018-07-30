import axios from 'axios';


// let host = 'http://192.168.1.102:8000';
// let host = 'http://192.168.0.106:8000';
// let host = 'http://192.168.43.29:8000';
// let host = 'http://192.168.43.29:8000';
let host = 'http://localhost:8000';

export const loadJobs=params=>{
  return axios.get(`${host}/jobs`)
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


