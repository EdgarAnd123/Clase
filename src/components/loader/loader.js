
export default {
    props: {
        loading: Boolean
    },

    data(){
        return {
            variant: 'dark',
            opacity: .5
        }
    }
    /*computed: {
        loading() {
            return this.$root.$store.getters.getLoading;
        }
    }*/
}