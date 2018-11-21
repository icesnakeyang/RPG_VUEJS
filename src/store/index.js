import Vue from 'vue'
import Vuex from 'vuex'
import {loadCompletList} from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    token:''||localStorage.token,
    username:''||localStorage.username,
    toUrl:''||localStorage.toUrl,

    roleType:''||localStorage.roleType,
    loginName:'',

    taskId:''||localStorage.taskId,

    jobId:''||localStorage.jobId,
    userId:''||localStorage.userId
  },
  actions:{
    saveToken(ctx, user){
      ctx.commit('saveToken', user)
    },
    logout(ctx){
      ctx.commit('logout')
    },
    saveToUrl(ctx, url){
      ctx.commit('saveToUrl', url)
    },
    saveJobId(ctx, jobId){
      ctx.commit('saveJobId', jobId)
    },
    saveTaskId(ctx, taskId){
      ctx.commit('saveTaskId', taskId)
    },
    clearTask(ctx){
      ctx.commit('clearTask')
    }
  },
  mutations:{
    saveToken(state,user){
      state.token=user.token;
      localStorage.token=user.token;
      state.username=user.username;
      localStorage.username=user.username;

      state.loginName=user.loginName;

      state.roleType=user.roleType;
      localStorage.roleType=user.roleType;

      state.userId=user.userId;
      localStorage.userId=user.userId;
    },
    logout(state){
      state.token='';
      localStorage.token='';
      state.username='';
      localStorage.username='';
      state.roleType='';
      localStorage.roleType='';
      state.loginName='';
      state.userId='';
      localStorage.userId='';
    },
    saveToUrl(state, url){
      state.toUrl=url;
      localStorage.toUrl=url;
    },
    saveJobId(state, jobId){
      state.jobId=jobId;
      localStorage.jobId=jobId
    },
    saveTaskId(state, taskId){
      state.taskId=taskId
      localStorage.taskId=taskId
    },
    clearTask(state){
      state.taskId=''
      localStorage.taskId=''
    }
  }
})
