import Vue from 'vue'
import Vuex from 'vuex'
import {loadCompletList} from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '' || localStorage.token,
    username: '' || localStorage.username,
    realName: '' || localStorage.realName,
    email: '' || localStorage.email,
    phone: '' || localStorage.phone,
    toUrl: '' || localStorage.toUrl,

    roleType: '' || localStorage.roleType,

    taskId: '' || localStorage.taskId,
    jobId: '' || localStorage.jobId,
    userId: '' || localStorage.userId,
    spotId: '' || localStorage.spotId,
    applyId: '' || localStorage.applyId
  },
  actions: {
    saveToken(ctx, user) {
      ctx.commit('saveToken', user)
    },
    saveRealName(ctx, realName){
      ctx.commit('saveRealName', realName)
    },
    logout(ctx) {
      ctx.commit('logout')
    },
    saveToUrl(ctx, url) {
      ctx.commit('saveToUrl', url)
    },
    clearToUrl(ctx) {
      ctx.commit('clearToUrl')
    },
    saveJobId(ctx, jobId) {
      ctx.commit('saveJobId', jobId)
    },
    saveTaskId(ctx, taskId) {
      ctx.commit('saveTaskId', taskId)
    },
    saveUserId(ctx, userId) {
      ctx.commit('saveUserId', userId)
    },
    clearTask(ctx) {
      ctx.commit('clearTask')
    },
    saveSpotId(ctx, spotId) {
      ctx.commit('saveSpotId', spotId)
    },
    saveAdmin(ctx, admin) {
      ctx.commit('saveAdmin', admin)
    },
    saveApplyId(ctx, applyId) {
      ctx.commit('saveApplyId', applyId)
    }
  },
  mutations: {
    saveToken(state, user) {
      state.token = user.token;
      localStorage.token = user.token;
      state.username = user.username;
      localStorage.username = user.username;
      state.realName = user.realName
      localStorage.realName = user.realName
      state.email = user.email
      localStorage.email = user.email
      state.phone = user.phone
      localStorage.phone = user.phone
      state.roleType = user.roleType;
      localStorage.roleType = user.roleType;
      state.userId = user.userId;
      localStorage.userId = user.userId;
    },
    saveRealName(state, realName){
      state.realName=realName
      localStorage.realName=realName
      state.username=realName
      localStorage.username=realName
    },
    logout(state) {
      state.token = '';
      localStorage.token = '';
      state.username = '';
      localStorage.username = '';
      state.roleType = '';
      localStorage.roleType = '';
      state.loginName = '';
      state.userId = '';
      localStorage.userId = '';
    },
    saveToUrl(state, url) {
      state.toUrl = url;
      localStorage.toUrl = url;
    },
    clearToUrl(state) {
      state.toUrl = ''
      localStorage.toUrl = ''
    },
    saveJobId(state, jobId) {
      state.jobId = jobId;
      localStorage.jobId = jobId
    },
    saveTaskId(state, taskId) {
      state.taskId = taskId
      localStorage.taskId = taskId
    },
    saveUserId(state, userId) {
      state.userId = userId
      localStorage.userId = userId
    },
    saveSpotId(state, spotId) {
      state.spotId = spotId
      localStorage.spotId = spotId
    },
    clearTask(state) {
      state.taskId = ''
      localStorage.taskId = ''
    },
    saveAdmin(state, admin) {
      state.token = admin.token
      localStorage.token = admin.token
      state.username = admin.loginName
      localStorage.username = admin.loginName
      state.roleType = admin.roleType
      localStorage.roleType = admin.roleType
    },
    saveApplyId(state, applyId) {
      state.applyId = applyId
      localStorage.applyId = applyId
    },
    clearAll(state) {
      state.token = ''
      localStorage.token = ''
      state.username = ''
      localStorage.username = ''
      state.realName = ''
      localStorage.realName = ''
      state.email = ''
      localStorage.email = ''
      state.phone = ''
      localStorage.phone = ''
      state.toUrl = ''
      localStorage.toUrl = ''
      state.roleType = ''
      localStorage.roleType = ''
      state.taskId = ''
      localStorage.taskId = ''
      state.jobId = ''
      localStorage.jobId = ''
      state.userId = ''
      localStorage.userId = ''
      state.spotId = ''
      localStorage.spotId = ''
      state.applyId = ''
      localStorage.applyId = ''
    }
  }
})
