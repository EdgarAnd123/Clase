import { mapGetters } from "vuex";
import firebase from "firebase";
import imageComponent from "../components/shared/image/image.vue"

export default {
  name: 'header-component',
  components: {
    'card-image': imageComponent
  },

  data() {
    return {
      menuItems: [ 
        {
          title: "Empleados",
          icon: "people-carry",
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
        },
        {
          title: "Soporte",
          icon: "phone-volume"
        },
        {
          title: "FAQ",
          icon: "question-circle"
        }
      ],
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

      firebase.auth().signOut().then( 
        () => this.$router.go('/')
      );
    }
  }
}