  const state = {
    companyInfo: null,
    isLoggedIn: false
  }

  const mutations = {
    SET_COMP_INFO: (state, payload) => {
      state.companyInfo = payload
      state.isLoggedIn = true
    },
    UPDATE_COMP_INFO: (state, payload) => {
      state.companyInfo.c_name = payload.comp_name
      state.companyInfo.c_desc = payload.description
      state.companyInfo.c_email = payload.email
      state.companyInfo.c_phone = payload.phone_no
      state.companyInfo.c_location = payload.location

    },
    UNSET_COMP_USER(state) {
      state.companyInfo = ''
      state.isLoggedIn = false
    }

  }
  const getters = {
    getCompInfo: (state) => {
      return state.companyInfo
    },
    getLoggedIn: (state) => {
      return state.isLoggedIn
    }

  }
 const actions = {
    setCompInfo:({commit},payload) => {
      commit('SET_COMP_INFO',payload)
    },
    unsetCompInfo: ({commit}) => {
        commit('UNSET_COMP_USER')
    },
    updateCompInfoInStore: ({commit}, payload) => {
      commit('UPDATE_COMP_INFO', payload)
    }
 }

  export default {
      state, getters, mutations, actions
  }
