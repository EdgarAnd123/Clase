import App from './App.vue'
import Axios from 'axios'
import { auth, userCollection } from '@/api/firebase/firebase';
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
import 'moment/locale/es'

//Font Awesome
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(PortalVue);

Vue.prototype.$axios = Axios;
Vue.prototype.$store = store;

auth.onAuthStateChanged( (user) => {
  if(user){
    userCollection.doc(user.uid).get().then(doc => {
      store.dispatch("fetchUser", doc.data());
    });
  }
});

const router = new VueRouter({
	routes,
	mode: 'history',
});

router.beforeEach( (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = store.getters.getToken;

    if (!token) { 
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