import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

function initState() {
  return {
  };
}

const mutations = {};

export default new Vuex.Store({
  state: initState(),
  mutations,
  actions,
  getters,
  strict: debug
});
