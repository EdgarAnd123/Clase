export default {
    state: {
        active: false,
        alertQueue: []
    },
    getters: {
        getAlertActiveStatus: state => {
            return state.active;
        },

        getAlertQueue: state => {
            return state.alertQueue;
        }
    },
    actions: {
        setAlert({ commit }, payload){
            commit('SET_ALERT', payload);
        },

        shutDownAlert({ commit }){
            commit('SHUT_DOWN_ALERT');
        },

        enableAlert({ commit }){
            commit('ENABLE_ALERT');
        }
    },
    mutations: {
        SET_ALERT(state, alert){
            state.alertQueue.push( { message: alert.msg, type: alert.type} );
            setTimeout(()=> state.active = true, 500);
        },

        SHUT_DOWN_ALERT(state){
            state.active = false;
        },

        ENABLE_ALERT(state){
            state.active = true;
        }
    }
}