export default {
    state: {
        user: {
            token: '',
            data: null
        }
    },
    getters: {
        getToken: state => state.user.token,
        getUserData: state => state.user.data
    },
    actions: {
        fetchUser( {commit}, user ) {
            commit('SET_USER', user);
        },

        fetchToken( {commit}, token ) {
            commit('SET_TOKEN', token);
        },

        setLogout( {commit} ) {
            commit('SET_LOGOUT');
        }
    },
    mutations: {
        SET_TOKEN(state, data) {
            state.user.token = data;
        },

        SET_USER(state, data) {
            state.user.data = data;
        },
        
        SET_LOGOUT(state) {
            state.user.token = '';
        }
    }
}