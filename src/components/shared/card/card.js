export default {
    props: {
        firstColumnWidth: {
            width: String,
            default: '33.3'
        },
        secondColumnWidth: String,
        thirdColumnWidth: String
    },
    computed: {
        gridColumns() {
            return {
                '--firstColumnWidth': `${this.firstColumnWidth}%`,
                '--secondColumnWidth': this.secondColumnWidth ? `${this.secondColumnWidth}%` : `${(100 - this.firstColumnWidth) / 2}%`,
                '--thirdColumnWidth': this.thirdColumnWidth ? `${this.thirdColumnWidth}%` : this.secondColumnWidth ? `${100 - this.firstColumnWidth - this.secondColumnWidth}%` : `${(100 - this.firstColumnWidth) / 2}%`
            }
        }
    }
}   
