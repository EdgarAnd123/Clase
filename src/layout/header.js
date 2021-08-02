import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      menuItems: [ {
          title: "Empleados",
          children: [
            {
              title: "Lista",
              routeName: "employees",
            },
            {
              title: "Crear",
              routeName: "create-employee",
            }
          ]
        }]
    }
  },

  computed: {
    ...mapGetters( {
      title: 'getTitle',
      isLoggedIn: 'getIsLoggedIn',
      user: 'getUserData'
    })
  },
  
  methods: {
    signOut() {
      this.$root.$store.dispatch("setLogout");

      firebase.auth()
      .signOut()
      .then( () => this.$router.go('/') );
    }
  }
}