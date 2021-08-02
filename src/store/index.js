import Vue from 'vue'
import Vuex from 'vuex'
import alertStore from './alert.store'
import authenticationStore from './auth.store'
import headerStore from './header.store'
import employeesStore  from './employees.store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        employees: employeesStore,
        alert: alertStore,
        auth: authenticationStore,
        header: headerStore
    }
})