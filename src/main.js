// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import router from './router'
import './config'

Vue.config.debug = true;

const app = new Vue({
    router,
    store
}).$mount('#app');