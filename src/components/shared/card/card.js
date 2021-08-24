export default {
    props: {
        firstColumnWidth: {
            width: String,
            default: '33.3'
        },
        secondColumnWidth: String,
        thirdColumnWidth: String,
        uid: String,
        isEnabled: Boolean
    },
    data() {
        return {
            cardSwiping: {
                elementXPosition: 0,
                touchedXPosition: 0,
                lastElementXPosition: 0
            }
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
                this.cardXPosition = cardElement.getBoundingClientRect().left;
                this.touchedXPosition = e.changedTouches[0].clientX;
            }, false)

            cardElement.addEventListener('touchmove', function(e){
                //e.preventDefault();
                let movedInX = e.changedTouches[0].clientX - this.touchedXPosition - 8;
                cardElement.style.left = `${( ( this.cardXPosition + movedInX > 23) ? 23 : ( this.cardXPosition + movedInX < 0) ? 0 : this.cardXPosition + movedInX )}px`;
            }, false)
        }
    }
}   
