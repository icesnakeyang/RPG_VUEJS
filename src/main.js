// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueAxios, axios);
Vue.use(VueI18n);

import chinese from '@/language/chinese.json'
import english from '@/language/english.json'

const messages={
  zh:chinese,
  en:english
};

const i18n=new VueI18n({
  locale:'zh',
  messages
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
});
