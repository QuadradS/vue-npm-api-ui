import {getAllPackages} from "@/services";

export default {
  namespaced: true,
  state: {
    searchValue: '',
    packages: [],
    selectedPackage: null,
    total: null
  },
  getters: {
    getPackages(state) {
      return state.packages
    },
    getTotal(state) {
      return state.total
    },
    getSelected(state) {
      return state.packages.find((p) => p.package.name === state.selectedPackage)?.package
    }
  },
  mutations: {
    async SET_PACKAGES(state, {total, results}) {
      state.total = total
      state.packages = results
    },
    SET_VALUE(state, {value}) {
      state.searchValue = value
    },
    SELECT_PACKAGE(state, {p}) {
      state.selectedPackage = p
    }
  },
  actions: {
    async loadPackages({commit}, {q, size, from}) {
      try {
        const res = await getAllPackages({q, size, from})
        commit('SET_PACKAGES', res)
      } catch (e) {
        console.error('loadPackages ', e)
      }
    },
    async changePage({commit, state: {searchValue}}, {page}) {
      try {
        const res = await getAllPackages({q: searchValue, from: page * 10})
        commit('SET_PACKAGES', res)
      } catch (e) {
        console.error('loadPackages ', e)
      }
    }
  },
}
