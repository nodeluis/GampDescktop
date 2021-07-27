import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:false,
    session:true,
    dataSession:null,
    loading: true,
  },
  mutations: {
    drawerPush(state,payload){
      state.drawer=payload;
    },
    sessionPush(state,payload){
      state.session=payload;
    },
    dataSessionPush(state,payload){
      state.dataSession=payload;
    },
    loadingPush(state,payload){
      state.loading=payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
