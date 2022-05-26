import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  age: 0 as number
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  age: state => state.age,
})

export const mutations = mutationTree(state, {
  setAge(state, age: number): void {
    state.age = age
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  getOlder({ getters, commit }) {
    const currentAge = getters.age
    commit('setAge', currentAge + 1)
  },
  hoge(): String {
    return 'i am hoge'
  },
  huga() {
		const res = this.app.$accessor.age.hoge()
		console.log(res)
  }
})

//https://qiita.com/shindex/items/a90217b9e4c03c5b5215