import employeeForm from "../forms/employee.vue"
import loaderComponent from "../../loader/loader.vue"

export default {
    name: 'edit-employee',
    components: {
        'employee-form': employeeForm,
        'loader-component': loaderComponent
    },
    data() {
        return {}
    },
    computed: {
        employee() {
            return this.$root.$store.getters.getEmployee;
        },
        isLoading() {
            return this.$root.$store.getters.getLoading;
        }
    },

    beforeRouteEnter(to, from, next) {
        next( (vue) => { 
            vue.$root.$store.dispatch("fetchEmployee", vue.$route.params.id);
            vue.$root.$store.dispatch("initializeHeader", {title: 'Editar empleado'} );
        } )
    },

    watch: {
        employee(newValue, oldValue) {
            console.log(oldValue);
            console.log(newValue);

        }
    },

    methods: {
        save () {
            this.$root.$store.dispatch("edit", this.employee)
            .then( () => this.$router.push('/employees') )
        }
    }
};