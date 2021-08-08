import imageComponent from "../../shared/image/image.vue"
import loaderComponent from "../../loader/loader.vue"
import moment from 'moment'

export default {
    name: 'profileEmployee',
    components: {
        'card-image': imageComponent,
        'loader-component': loaderComponent,
    },

    data() {
        return {
            daysPerSalary: 1,
            selectedSalaryPeriod: "Diario",
        }
    },
    beforeRouteEnter(to, from, next) {
        next( (vue) => { 
            vue.$root.$store.dispatch("fetchEmployee", vue.$route.params.id.toString());
            vue.$root.$store.dispatch("initializeHeader", {title: 'Detalles del empleado'} );
        } )
    },

    computed: {
        employee () {
            return this.$root.$store.getters.getEmployee;
        },
        salaryFilters() {
            return this.$root.$store.getters.getSalaryFilters;
        },
        salary() {
            return this.employee.baseSalary  * this.daysPerSalary;
        },
        vacationBonus() {
            return this.vacationBonusCalculator(this.employee.startDate); 
        },
        christmasBonus() {
            return this.christmasBonusCalculator(this.employee.startDate); 
        },
        isLoading() {
            return this.$root.$store.getters.getLoading;
        }
    },
    methods: {
        onChange(rangeTime) {
            switch (rangeTime) {
                case 'Diario':
                    return this.daysPerSalary = 1;
                case 'Semanal':
                    return this.daysPerSalary = 7;
                case 'Mensual':
                    return this.daysPerSalary = 30;
            } 
        },

        validateArray(arr, field){
            if (arr && arr.length > 0){
                return arr[arr.length -1][field];
            }
            
            return ''
        },

        validateString(string = '', index){
            return string.substring(index);
        },

        sortNestedArray(arr, property){
            if(!arr){
                arr[property].sort(function(a,b){
                    return (new Date(a.startDate) - new Date(b.startDate))
                })
            }
        },

        vacationBonusCalculator(employeeStartedDate) {
            const daysInYear = 365;
            const daysActive = parseInt((this.daysActive(employeeStartedDate)).toFixed(0));
            const yearsActive = parseInt((this.daysActive(employeeStartedDate) / daysInYear).toFixed(0));

            if(daysActive < daysInYear) {
                return 0;
            }

            const vacationDaysPerYear = {
                "1": 6,
                "2": 8,
                "3": 10,
                "4": 12,
                "5": 16,
                "6": 18
            }

            let vacationDays = vacationDaysPerYear[yearsActive] || 20;

            return (this.employee.baseSalary * vacationDays * 0.25).toFixed(2);
        },

        christmasBonusCalculator(employeeStartedDate) {
            const daysInYear = 365;
            const daysActive = this.daysActive(employeeStartedDate);

            if(daysActive < daysInYear) {
                return (0.041 * daysActive * this.employee.baseSalary).toFixed(2);
            }

            return (this.employee.baseSalary * 15).toFixed(2);
        },

        daysActive(initialDate) {
            const startedDate = new Date(initialDate);
            const currentDate = Date.now();
            const milisInDay = 1000 * 60 * 60 * 24;

            return (currentDate - startedDate) / milisInDay;
        }
    },
    filters: {
        toUSD(value) {
            if(value === 0) return `No aplica por tiempo`;

            return `$${value} pesos`;
        },
        phoneFormat: function(value) {
            if (!value) return '';
            
            return "(" + value.substring(0,3) + ") " + value.substring(3,6) + "-" + value.substring(6);
        },
        dateFormat: function(value){
            return value ? moment(value).format('L') : '';            
        }
    }
}
