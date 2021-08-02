import login from "../components/auth/login/login.vue"
import employees from "../components/employees/list/list.vue"
import editEmployee from "../components/employees/edit/edit.vue"
import createEmployee from "../components/employees/create/create.vue"
import profileEmployee from "../components/employees/profile/profile.vue"

export default [
    {
        name: 'login', path: "/", component: login, meta: { hideLayoutComponents: true }
    },
    {
        name: 'employees', path: "/employees", component: employees, meta: { requiresAuth: true }
    },
    {
        name: 'create-employee', path: "/employees/create", component: createEmployee, meta: { requiresAuth: true }
    },
    {
        name: 'profile-employee', path: "/employees/:id", component: profileEmployee, meta: { requiresAuth: true }
    },
    {
        name: 'edit-employee', path: "/employees/edit/:id", component: editEmployee, meta: { requiresAuth: true }
    },
    { 
        path: '/*', redirect: '/'
    }
]
