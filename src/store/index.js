import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  loginState: true, //是否进入登录界面
  navData: [{
    title: '首页',
    path: '/index'
  }]
}
const mutations = {
  SET_LOGIN_STATE: (state, arg) => state.loginState = arg,
  SET_NAV_DATA: (state, arg) => state.navData.push(arg)
}
const actions = {
  setLoginState: (context, arg) => context.commit("SET_LOGIN_STATE", arg),
  setNavData: (context, arg) => context.commit("SET_NAV_DATA", arg)
}
const getters = {
  getLoginState: state => state.loginState,
  getNavData: state => state.navData
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
