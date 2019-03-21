export const state = () => ({
  menuStatus: 'reverse',
  showNavMenu: 'close'
})

export const mutations = {
  updateStatus (state, payloadStatus) {
    state.menuStatus = payloadStatus
  },

  updateNavMenu (state, payloadMenu) {
    state.showNavMenu = payloadMenu
  }
}
