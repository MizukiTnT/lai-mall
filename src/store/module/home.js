import { CHANGE_AUTHINFO, CHANGE_USERINFO } from '../mutation_type'

const state = {
  userInfo: {},
  authInfo: {}
}

const mutation = {
  [CHANGE_USERINFO] (state, payload) {
    state.userInfo = payload
  },
  [CHANGE_AUTHINFO] (store, payload) {
    state.authInfo = payload
  }
}

const action = {
  setUserInfo ({commit}, userInfo) {
    commit(CHANGE_USERINFO, userInfo)
  }
}