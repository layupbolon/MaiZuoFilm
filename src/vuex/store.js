import Vue from 'vue'
import Vuex from 'vuex'
import {common,home,detail,film} from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        common,
        home,
        detail,
        film
    },
    strict:process.env.NODE_ENV !== 'production'
});

export default store;