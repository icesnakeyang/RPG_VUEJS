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









