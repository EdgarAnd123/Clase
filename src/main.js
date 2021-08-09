import App from './App.vue'
import Axios from 'axios'
import firebase from 'firebase';
import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from './routing/routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import Vue2TouchEvents from 'vue2-touch-events'


//Font Awesome
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(PortalVue);
Vue.use(Vue2TouchEvents);

Vue.prototype.$axios = Axios;
Vue.prototype.$store = store;

const router = new VueRouter({
	routes,
	mode: 'history',
});

router.beforeEach( (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = store.getters.getIsLoggedIn;

    if (!auth) { 
      next( {
        path: '/login'
      }) 
    } else {
      next();
    }
  } else {
    next();
  }
})

var firebaseConfig = {
  apiKey: "AIzaSyC49cRfBDVXGQx1XJYAF37J7kkFc-TSEZI",
  authDomain: "blog-list-1d104.firebaseapp.com",
  databaseURL: "https://blog-list-1d104-default-rtdb.firebaseio.com",
  projectId: "blog-list-1d104",
  storageBucket: "blog-list-1d104.appspot.com",
  messagingSenderId: "757047064866",
  appId: "1:757047064866:web:d2661f2b8ea8eeab744d7b"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged( (user) => {
  if(user){
    firebase.firestore().collection("usuarios").doc(user.uid).get().then(doc => {
      //console.log(doc);
      //console.log("Antes de fetch");
      store.dispatch("fetchUser", doc.data());
    });
  }

});

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store,
  created(){
    const html = document.documentElement;
    html.setAttribute('lang', 'es')
  }
})