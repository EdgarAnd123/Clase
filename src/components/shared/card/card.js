import moment from 'moment'
import firebase from 'firebase'

export default {
    props: {
        firstColumnWidth: {
            width: String,
            default: '33.3'
        },
        secondColumnWidth: String,
        thirdColumnWidth: String,
        uid: String,
        isActive: Boolean
    },
    data() {
        return {
            cardSwiping: {
                elementXPosition: '',
                touchedXPosition: '',
                lastElementXPosition: ''
            },
            currentDate: null
        }
    },
    mounted() {
        this.swipeCard(`card-${this.uid}`);
        this.currentDate = new Date();
    },
    computed: {
        gridColumns() {
            return {
                '--firstColumnWidth': `${this.firstColumnWidth}%`,
                '--secondColumnWidth': this.secondColumnWidth ? `${this.secondColumnWidth}%` : `${(100 - this.firstColumnWidth) / 2}%`,
                '--thirdColumnWidth': this.thirdColumnWidth ? `${this.thirdColumnWidth}%` : this.secondColumnWidth ? `${100 - this.firstColumnWidth - this.secondColumnWidth}%` : `${(100 - this.firstColumnWidth) / 2}%`
            }
        }
    },
    methods: {
        swipeCard(id) {
            const cardElement = document.getElementById(id);

            cardElement.addEventListener('touchstart', function(e){
                //e.preventDefault();
                
                this.elementXPosition = cardElement.getBoundingClientRect().left;
                this.touchedXPosition = e.changedTouches[0].clientX;
            }, false)

            cardElement.addEventListener('touchmove', function(e){
                //e.preventDefault();

                let movedInX = e.changedTouches[0].clientX - this.touchedXPosition;
                cardElement.style.left = `${( (this.elementXPosition + movedInX > 35) ? 35 : (this.elementXPosition + movedInX < 0) ? 0 : this.elementXPosition + movedInX )}px`;
            }, false)
        },

        setClockIn() {
            const currentHours = this.currentDate.getHours();
            const currentMinutes = this.currentDate.getMinutes();
            const formattedDate = moment(this.currentDate).format('L');
      
            firebase.firestore().collection("empleados").doc(this.uid).update(
              {
                activeEmployee: true,
                timings: firebase.firestore.FieldValue.arrayUnion(
                  {
                    clockIn: `${currentHours}:${currentMinutes}`,
                    date: formattedDate
                  }
                )
              }
            )
          },

          setMealTime() {
            const currentHours = this.currentDate.getHours();
            const currentMinutes = this.currentDate.getMinutes();

            firebase.firestore().collection("empleados").doc(this.uid).get()
            .then( (doc) => {
              var timings = doc.data().timings;
              var timingToUpdate = timings[timings.length - 1];

              timingToUpdate.mealTime = `${currentHours}:${currentMinutes}`;
              timings[timings.length - 1] = timingToUpdate;

              firebase.firestore().collection("empleados").doc(this.uid).update(
                {
                  timings: timings
                }
              )
            })
          },

          setClockOut() {
            const currentHours = this.currentDate.getHours();
            const currentMinutes = this.currentDate.getMinutes();

            firebase.firestore().collection("empleados").doc(this.uid).get()
            .then( (doc) => {
              var timings = doc.data().timings;
              var timingToUpdate = timings[timings.length - 1];
              
              timingToUpdate.clockOut = `${currentHours}:${currentMinutes}`;
              timings[timings.length - 1] = timingToUpdate;

              firebase.firestore().collection("empleados").doc(this.uid).update(
                {
                  timings: timings
                }
              )
            })
          }
    }
}   
