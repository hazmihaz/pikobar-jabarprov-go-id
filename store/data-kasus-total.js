
export const state = () => ({
  items: null,
  item: null,
  metadata: null,
  isLoading: true
})

export const mutations = {
  setItems (state, items) {
    state.items = items
  },
  setItem (state, item) {
    state.item = item
  },
  setMetadata (state, item) {
    state.metadata = item
  },
  setIsLoading (state, item) {
    state.isLoading = item
  }
}

export const actions = {
  async getItems ({ commit }, options) {
    commit('setIsLoading', true)
    const { data } = await this.$dashboardPikobarApi.get('kasus/total')
    commit('setItems', data.data)
    commit('setMetadata', data.metadata)
    commit('setIsLoading', false)
  },

  async getItem ({ commit }, query, options) {
    commit('setIsLoading', true)
    const { data } = await this.$dashboardPikobarApi.get('kasus/total?' + query)
    commit('setItem', data.data)
    commit('setIsLoading', false)
  }
}

export const getters = {
  itemsMap (state) {
    return state.items
  },
  itemMap (state) {
    return state.item
  },
  metadataMap (state) {
    return state.metadata
  },
  isLoading (state) {
    return state.isLoading
  }
}
