import * as types from '../types';

const state = {
    title: '',
    loading: 0,
    leftNavState: false
}

const actions = {
    comConf({commit}, settings){
        commit(types.COM_CONF, settings)
    },
    //左侧导航栏的开关
    changeLeftNavState({commit}, status){
        commit(types.CHANGE_LEFTNAV_STATUS, status)
    }
}

const getters = {
    getLoading: state => state.loading,
    getTitle: state => state.title,
    leftNavState: state => state.leftNavState
}

const mutations = {
    [types.COM_CONF](state, settings){
        state = Object.assign(state, settings)
    },
    [types.COM_LOADING_STATUS](state, status){
        if (state.loading == 0 && !status) {
            return;
        }
        state.loading = status ? ++state.loading : --state.loading;
    },
    [types.CHANGE_LEFTNAV_STATUS](state, status){
        state.leftNavState = status
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}