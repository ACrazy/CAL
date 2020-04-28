const state = {
  loginState: true, //是否进入登录界面
  navData: []
}
const mutations = {
  SET_LOGIN_STATE(state, status) {
    state.loginState = status
  },
  SET_NAV_DATA(state, data) {
    state.navData = data
  }
}
const actions = {
  setLoginState(context, status) {
    context.commit("SET_LOGIN_STATE", status)
  },
  setNavData(context, data) {
    context.commit("SET_NAV_DATA", data)
  }
}
const getters = {
  getLoginState: state => state.loginState,
  getNavData: state => state.navData
}

export default {
  state,
  mutations,
  getters,
  actions
}
