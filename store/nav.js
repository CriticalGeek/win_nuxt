export const state = () => ({
  menuStatus: 'reverse',
  showNavMenu: 'links'
})

export const mutations = {
  updateStatus (state, payloadStatus) {
    state.menuStatus = payloadStatus
    console.log(state.menuStatus)
  },

  updateNavMenu (state, payloadMenu) {
    state.showNavMenu = payloadMenu
    console.log(state.showNavMenu)
  }
}
