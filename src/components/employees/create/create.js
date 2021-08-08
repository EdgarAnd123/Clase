import employeeForm from "../forms/employee.vue"

export default {
    name: 'create-employee',
    components: {
        'employee-form': employeeForm
    },

    data() {
        return {
            employee: {
                activeEmployee: false,
                workingHours: 8
            }
        }
    },

    beforeRouteEnter(to, from, next) {
        next( (vue) => { 
            vue.$root.$store.dispatch("initializeHeader", { title: 'Crear empleado'} );
        } )
    },

    methods: {
        save() {
            this.$root.$store.dispatch("add", this.employee)
            .then( () => this.$router.push('/employees') )
        }
    }
};