//import employeesApi from "@/api/employees.api.js"
//import rolesApi from "@/api/roles.api.js"
import { employeesCollection, updateDoc, createDoc } from '@/api/firebase/firebase'

export default  {
    state: {
        employees: null,
        employee: null,
        working_hours: [8, 4],
        employees_filter: [
            {
                text: 'Todos',
                value: 'all',
                disabled: false
            },
            {
                text: 'Activos',
                value: true,
                disabled: false
            },
            {
                text: 'Inactivos',
                value: false,
                disabled: false
            }
        ],
        roles: [
            "Cocinero",
            "Repartidor", 
            "Cajero"
        ],
        salary_filter: [
            "Diario",
            "Semanal",
            "Mensual"
        ],
        isLoading: false,
        collectionName: 'empleados'
    },

    getters: {
        getEmployees: state => {
            return state.employees;
        },

        getEmployee(state) {
            return (employeeId) => { 
                let employee = state.employees.find((e) => e.id === employeeId);

                return employee;
            }
        },

        getRoles: state => {
            return state.roles;
        },

        getWorkingHours: state => {
            return state.working_hours;
        },

        getEmployeeFilters: state => {
            return state.employees_filter;
        },

        getSalaryFilters: state => {
            return state.salary_filter;
        },

        getLoading: state => {
            return state.isLoading;
        }
    },

    actions: {
        fetchEmployees( {commit, dispatch} ) {
            dispatch('setLoading', true);
            employeesCollection.onSnapshot(snapshot => {
                let  docs = [];

                snapshot.forEach(doc => {
                    let data = doc.data();
                    data.id = doc.id;
                    docs.push(data);
                })

                commit('SET_EMPLOYEES', docs);
                dispatch('setLoading', false);
                dispatch('setAlert', { msg: 'Consulta de usuarios realizada con éxito', type: 'success' } );
            }, ( error) => {
                console.log(error);
                dispatch('setLoading', false);
                dispatch('setAlert', { msg: 'Error al traer los usuarios de la base de datos', type: 'danger' } );
            });
            
            /*firebase.firestore().collection("empleados").get().then(response => {
                const docs = response.docs.map( doc => doc.data() );

                commit('SET_EMPLOYEES', docs);
                dispatch('setLoading', false);
                dispatch('setAlert', { msg: 'Consulta de usuarios realizada con éxito', type: 'success' } );
            }).catch( error => {
                console.log(error);
                dispatch('setLoading', false);
                dispatch('setAlert', { msg: 'Error al traer los usuarios de la base de datos', type: 'danger' } );
            });*/

            /*employeesApi.getEmployees()
            .then(response => { 
                dispatch('setLoading', false);
                console.log(response.data);
                commit('SET_EMPLOYEES', response.data);
                dispatch('setAlert', { msg: 'Consulta de usuarios realizada con éxito', type: 'success' } );
            })
            .catch( error => {
                console.log(error);
                dispatch('setLoading', false);
                dispatch('setAlert', { msg: 'Error al traer los usuarios de la base de datos', type: 'danger' } );
            });*/
        },

        /*fetchEmployee( {commit, dispatch}, payload) {
            dispatch('setLoading', true);
            employeesApi.getEmployee(payload)
            .then( response => { 
                dispatch('setLoading', false);
                commit('SET_EMPLOYEE', response.data);
                dispatch('setAlert', { msg: 'Consulta de usuario realizada con exito', type: 'success' } )
            })
            .catch( error => {
                console.log(error);
                dispatch('setLoading', false);
                dispatch('setAlert', { msg: 'Error al traer el usuario de la base de datos', type: 'danger' } )
            });
        },*/

        /*fetchRoles( {commit, getters} ) {
            rolesApi.getRoles()
            .then( response => {
                commit('SET_ROLES', response.data.roles);
                dispatch('setAlert', { msg: 'Roles cargados con éxito', type: 'success' } );
            })
            .catch( error => {
                console.log(error);
                dispatch('setAlert', { msg: 'Error al traer los roles de la base de datos', type: 'danger' } )
            });
        },*/

        add( {dispatch, state, commit}, payload ) {
            const docId = (state.employees.length + 1).toString();

            createDoc(state.collectionName, docId, payload).then(() => {
                commit('UPDATE_EMPLOYEES', [payload]);
                dispatch('setAlert', { msg: 'Empleado creado con éxito', type: 'success' } );
            })
            //getters.getEmployees.push(payload);

            /*employeesApi.post(payload)
            .then( response => console.log( response ) )
            .catch( error => console.log(error) );*/
        },

        edit( {commit, state}, payload ) {
            updateDoc(state.collectionName, payload.id, payload).then(() => {
                //Guardar en el store

                commit('UPDATE_EMPLOYEES', payload);
            }).catch(() => {
                //Alert de error al actualizar
            });
            /*employeesApi.patch(payload)
            .then( response => console.log( response ) )
            .catch( error => console.log(error) );*/
        },

        /*delete ( context, payload ){
            employeesApi.delete(payload)
            .then( response => console.log(response) )
            .catch( error => console.log(error) );
        },*/

        setLoading( {commit}, payload) {
            commit('SET_LOADING', payload);
        }
    },

    mutations: {
        SET_EMPLOYEES(state, employees ) {
            state.employees = employees;
        },

        UPDATE_EMPLOYEES(state, employee) {
            state.employees = [...state.employees, ...employee];
        },

        SET_ROLES(state, data) {
            state.roles = data;
        },

        SET_LOADING(state, payload) {
            state.isLoading = payload;
        }
    },

}

