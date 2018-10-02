import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    token:''||localStorage.token,
    username:''||localStorage.username,
    toUrl:''||localStorage.toUrl,

    roleType:''||localStorage.roleType,
    loginName:'',
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
    },
    logout(state){
      state.token='';
      localStorage.token='';
      state.username='';
      localStorage.username='';
      state.roleType='';
      localStorage.roleType='';
      state.loginName='';
    },
    saveToUrl(state, url){
      state.toUrl=url;
      localStorage.toUrl=url;
    }
  }
})
