import moment from 'moment'

export default {
    name: 'cardEmployee',
    props: {
      employee: Object
    },
    data() {
      return {
        clockIn: false,
        mealTimeOut: false,
        mealTimeIn: false,
        clockOut: false,
      }
    },
    methods: {
        /*validateArray(arr, field) {
            if (arr && arr.length > 0){
                return arr[arr.length -1][field];
            }

            return null
          }*/

      verifyInTodaysTiming(field) {
        const array = this.employee.timings;

        if (array && array.length > 0) {
          const date = new Date();
          const lastTiming = array[array.length - 1];

          if(lastTiming.date === moment(date).format('L')
             && lastTiming[field]) {
            this[field] = true;
            
            return lastTiming[field];
          }
        }

        return '--:--'
      }
    }
}