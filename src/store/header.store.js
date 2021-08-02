export default {
    state: {
        title: 'Header',
    },

    getters: {
        getTitle: state => {
            return state.title;
        }
    },

    actions: {
        initializeHeader( { commit }, payload) {
            commit('INITIALIZE_HEADER', payload)
        }
    },

    mutations: {
        INITIALIZE_HEADER(state, payload) {
            state.title = payload.title;
        }
    }
}