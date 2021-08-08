import cardComponent from "../../shared/card/card.vue"
import imageComponent from "../../shared/image/image.vue"
import alertComponent from "../../shared/alert/alert.vue"
import loaderComponent from "../../loader/loader.vue"
import { mapGetters } from "vuex"

export default {
  name: 'listEmployees',
  components: {
    'card': cardComponent,
    'card-image': imageComponent,
    'alert': alertComponent,
    'loader-component': loaderComponent,
  },

  data() {
    return {
      selectedFilter: 'all',
      searchValue: '',
      employeesCounter: 0
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vue) => {
      vue.$root.$store.dispatch("fetchEmployees");
      vue.$root.$store.dispatch("initializeHeader", { title: 'Empleados' });
    })
  },

  computed: {
    ...mapGetters({
      employeeFilters: 'getEmployeeFilters',
      isLoading: 'getLoading'
    }),

    employees() {
      const employeesList = this.$root.$store.getters.getEmployees;

      if(employeesList) {
        
        return employeesList
        .filter(employee => this.selectedFilter.indexOf(!employee.activeEmployee))
        .filter(employee => {
          if (this.searchValue) {
            return employee.name.toLowerCase().includes(this.searchValue.toLowerCase());
          }
          return true;
        })
        .sort((a, b) => (a.name > b.name) ? 1 : -1);
      }
    }      
  },

  watch: {
    employees() {
      this.employeesCounter = this.employees.length;
    }
  },

  filters: {
    emptyDate: function (value) {
      if (!value) {
        return 'Present';
      }

      return value;
    },
    formatActiveStatusText: function(value) {
      if (value) {
        return 'Activo';
      }

      return 'Inactivo';
    }
  }
}