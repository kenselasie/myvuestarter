const state = {
    loading: {}
  }

  const mutations = {
    SET_LOADING: (state, payload) => {
      state.loading.loadingState = payload.loadingState
      state.loading.msg = payload.msg
    },
    
    STOP_LOADING: (state, payload) => {
      state.loading = payload
      state.loading.msg = ''
    },
  }
  const getters = {
    getLoading: (state) => {
      return state.loading
    }
  }
 const actions = {
    setLoading:({commit},payload) => {
      commit('SET_LOADING',payload)
    },
    stopLoading:  ({commit}, payload) => {
      commit('STOP_LOADING', payload)
    },
 }

  export default {
      state, getters, mutations, actions
  }
