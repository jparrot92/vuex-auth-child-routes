import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  modules: {
    auth,
  },
});
