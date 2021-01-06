import Vue from 'vue'
import Vuex from 'vuex'

// importing modules
import hotels from "@/store/modules/hotels";
import checkboxes from "@/store/modules/checkboxes";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hotels,
    checkboxes
  }
})
