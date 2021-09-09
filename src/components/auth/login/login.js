import { auth } from '@/api/firebase/firebase';

export default {
	data() {
		return {
			username: 'sancheze82@uabc.edu.mx',
			password: 'edgar123'
		}
	},

	methods: {
		login() {
			auth.signInWithEmailAndPassword(this.username, this.password)
			.then((response) => {
					this.$root.$store.dispatch('fetchToken', response.user.Aa);	
					this.$router.push('employees');
				},
				error => {
					console.log(error);
				}
			)
		}
	}
}