import employeeForm from "../forms/employee.vue"

export default {
    name: 'create-employee',
    components: {
        'employee-form': employeeForm
    },

    data() {
        return {
            employee: {
                name: 'Javier',
                lastName: 'Medina',
                phoneNumber: '(646) 125-55-66',
                emergencyNumber: '(646) 147-35-62',
                rfc: 'JAME950824B66',
                role: 'Cocinero',
                email: 'javier@hotmail.com',
                socialNumber: '124578369',
                baseSalary: '130',
                isActive: true,
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