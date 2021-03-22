import {getAllPackages} from "@/services";

export default {
  namespaced: true,
  state: {
    packages: [],
    selectedPackage: null,
    total: null
  },
  getters: {
    getPackages(state) {
      return state.packages
    }
  },
  mutations: {
    async SET_PACKAGES(state, {total, results}) {
      state.total = total
      console.log('results ', results)
      state.packages = results
    }
  },
  actions: {
    async loadPackages({commit}, {q, size, from}) {
      try {
        const res = await getAllPackages({q, size, from})
        commit('SET_PACKAGES', res)
      } catch (e) {
        console.log('loadPackages ', e)
      }
    }
  },
}
