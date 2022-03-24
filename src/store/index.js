import Vue from 'vue'
import Vuex from 'vuex'
import ModulA from './modules/ModulA'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ModulA
  }
})
