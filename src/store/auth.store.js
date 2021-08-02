export default {
    state: {
        user: {
            isLoggedIn: false,
            data: null
        }
    },

    getters: {
        getIsLoggedIn: state => state.user.isLoggedIn,
        getUserData: state => state.user.data
    },

    actions: {
        fetchUser( { commit }, user ) {
            commit('SET_LOGIN');
            commit('SET_USER', user);
        },
        setLogout( { commit } ) {
            commit('SET_LOGOUT');
        }
    },

    mutations: {
        SET_LOGIN(state) {
            state.user.isLoggedIn = true;
        },
        SET_LOGOUT(state) {
            console.log(state.user.isLoggedIn);
            state.user.isLoggedIn = false;
            console.log(state.user.isLoggedIn);
        },
        SET_USER(state, data) {
            state.user.data = data;
          }
    }
}