import firebase from 'firebase';

export default {
	data() {
		return {
			username: 'sancheze82@uabc.edu.mx',
			password: 'edgar123'
		}
	},

	methods: {
		login() {
			firebase.auth().signInWithEmailAndPassword(this.username, this.password)
			.then(
				() => this.$router.push('employees'),
				error => {
					console.log(error);
				}
			)
		}
	}
}