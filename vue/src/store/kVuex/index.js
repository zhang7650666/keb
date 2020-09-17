import Vue from "vue";
import KVuex from "./kvue";

Vue.use(KVuex);
export default new KVuex.KStore({
  state: {
    count: 0
  },
  mutations: {
    add(state, num = 1) {
      state.count += num;
    }
  },
  getters: {
    score(state) {
      return "score:" + state.count;
    }
  },
  actions: {
    // 复杂业务逻辑，类似于controller
    // 比如ajax请求
    asyncAdd({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("add");
          resolve({ok:1})
        }, 1000);
      })
      
    }
  }
});
