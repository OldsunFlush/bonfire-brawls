export const state = () => ({
  saves: []
})

export const mutations = {
  add(state, save) {
    state.saves.push(save)
  },
  remove(state, { save }) {
    state.saves.splice(state.save.indexOf(save), 1)
  },
  load(state, save) {

  }
}
