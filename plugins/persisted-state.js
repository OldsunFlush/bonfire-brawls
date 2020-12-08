import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (isHMR) {
    return
  }
  if (process.browser) {
    window.onNuxtReady(() => {
      createPersistedState({
        key: 'bonfire-brawls'
      })(store)
    })
  }
}
