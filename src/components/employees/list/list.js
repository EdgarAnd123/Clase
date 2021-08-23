import cardComponent from "../../shared/card/card.vue"
import imageComponent from "../../shared/image/image.vue"
import cardOptionsComponent from "../list/card-options/card-options.vue"
import cardEmployeeComponent from "../list/card-employee/card-employee.vue"
import loaderComponent from "../../loader/loader.vue"
import { mapGetters } from "vuex"
import moment from 'moment'

export default {
  name: 'listEmployees',
  components: {
    'card': cardComponent,
    'card-image': imageComponent,
    'card-options': cardOptionsComponent,
    'card-employee': cardEmployeeComponent,
    'loader-component': loaderComponent,
  },
  data() {
    return {
      selectedFilter: true,
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
        .filter(employee => this.selectedFilter.toString().indexOf(!employee.isActive))
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
  methods: {
    registerClockIn(employee) {
      const date = new Date();
      const currentHours = date.getHours();
      const currentMinutes = date.getMinutes();

      if(!employee.timings) {
        employee.timings = [];
      }

      const payload = {
        ...employee,
        isActive: true,
        timings: [
          ...employee.timings,
          {
            date: moment(date).format('L'),
            clockIn: `${currentHours}:${currentMinutes}`
          }
        ]
      }

      this.$root.$store.dispatch("edit",payload);
    },

    isEmployeeActive(employee) {
      const date = new Date();

      if(employee.timings) {
        return !!employee.timings
        .find(timing => timing.date === moment(date).format('L'));
      }
      
      return false;     
    }
  },
  watch: {
    employees() {
      this.employeesCounter = this.employees.length;
    }
  },
  filters: {
    formatBoolean(value) {
      if(value === true) {
        return 'Activos'
      }

      if(value === false) {
        return 'Inactivos'
      }
      
      return 'Todos'
    }
  }
}