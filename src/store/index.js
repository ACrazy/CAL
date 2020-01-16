import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  loginState: true, //是否进入登录界面
}
const mutations = {
  SET_LOGIN_STATE(state, status) {
    state.loginState = status
  }
}
const actions = {
  setLoginState(context, status) {
    context.commit("SET_LOGIN_STATE", status)
  }
}
const getters = {
  getLoginState: state => state.loginState
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
