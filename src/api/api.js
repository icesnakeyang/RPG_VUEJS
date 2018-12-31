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
export const apiRegisterByEmail=params=>{
  return axios.post(`${host}/user/register/registerByEmail`, params)
}

export const apiListPublicJob=params=>{
  return axios.post(`${host}/job/plaza/listPublicJob`, params)
}

export const apiLoginByEmail=params=>{
  return axios.post(`${host}/user/login/loginByEmail`, params)
}

export const apiGetEmailByEmail=params=>{
  return axios.post(`${host}/user/register/getEmailByEmail`, params)
}









