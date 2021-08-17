export default {
    data() {
        return {
            alertType: '',
            message: '',
            alertInterval: ''
        }
    },

    computed: {
        alerts(){
            return this.$root.$store.getters.getAlertQueue;
        },

        status(){
            return this.$root.$store.getters.getAlertActiveStatus;
        }
    },
    
    watch: {
        status(){
            this.alertIterator();
        }
    },

    methods: {
        alertIterator(){
            if(this.alerts.length == 0){
                this.$root.$store.dispatch("shutDownAlert");
                setTimeout(clearInterval(this.alertInterval), 1500);

                return;
            }

            this.message = this.alerts[0].message;
            this.alertType = this.alerts[0].type;

            this.alerts.shift();
            this.alertInterval = setInterval(this.alertIterator, 2500);
        }
    }
}