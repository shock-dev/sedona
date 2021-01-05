import Vue from 'vue'
import Vuex from 'vuex'

// importing modules
import hotels from "@/store/modules/hotels";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hotels
  }
})
