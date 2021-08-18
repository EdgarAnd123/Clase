import cardComponent from "../../shared/card/card.vue"
import imageComponent from "../../shared/image/image.vue"
import loaderComponent from "../../loader/loader.vue"
import { mapGetters } from "vuex"
import moment from 'moment'
import { updateDoc, arrayUnion } from '@/api/firebase/firebase'

export default {
  name: 'listEmployees',
  components: {
    'card': cardComponent,
    'card-image': imageComponent,
    'loader-component': loaderComponent,
  },

  data() {
    return {
      selectedFilter: 'all',
      searchValue: '',
      employeesCounter: 0,
      currentDate: null
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

  methods: {
    validateArray(arr, field) {
      if (arr && arr.length > 0){
          return arr[arr.length -1][field];
      }
      
      return '--:--'
    },
    registerTime(workReason) {
      const currentHours = this.currentDate.getHours();
      const currentMinutes = this.currentDate.getMinutes();
      const formattedDate = moment(this.currentDate).format('L');

      if(workReason === 'clockIn') {
          updateDoc('empleados', this.uid, {
              activeEmployee: true,
              timings: arrayUnion({
                  date: formattedDate,
                  clockIn: `${currentHours}:${currentMinutes}`
              })
          });
      } else {
          //const employeeList = this.$root.$store.getters.getEmployees;
          let employeeIndex = this.employee.findIndex(employee => 
              employee.id === this.uid);
          let timings = employees[employeeIndex].timings;
          let timingToUpdate = timings[timings.length - 1];

          timingToUpdate[workReason] = `${currentHours}:${currentMinutes}`;
          timings[timings.length - 1] = timingToUpdate;

          updateDoc('empleados', this.uid, {'timings': timings} );
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
    validateTimings(value){
      if(!value){
          return '--:--'
      }

      return value
    }
  }
}