import moment from 'moment'

export default {
	name: 'cardOptions',
	props: {
		employee: Object
	},
	data() {
		return {
			date: null
		}
	},
	created() {
		this.date = new Date();
	},
	methods: {
		updateTimingRecord(workReason) {
			let currentHours = this.date.getHours();
			let currentMinutes = this.date.getMinutes();
			currentHours = currentHours < 10 ? `0${currentHours}` : currentHours;
			currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
			
			if(this.timingToUpdate) {
				this.timingToUpdate[workReason] = `${currentHours}:${currentMinutes}`;
				this.$root.$store.dispatch("edit", {
					...this.employee,
					timings: this.employee.timings
				});
			}
		}
	},
	computed: {
		timingToUpdate() {
			if(this.employee.timings) {
				return this.employee.timings
				.find(timing => timing.date === moment(this.date).format('L'));
			}
		},

		mealTimeOut() {
			if(this.timingToUpdate) {
				return !!this.timingToUpdate.mealTimeOut;
			}

			return false;
		},

		mealTimeIn() {
			if(this.timingToUpdate) {
				return !!this.timingToUpdate.mealTimeIn;
			}

			return false;
		},

		clockOut() {
			if(this.timingToUpdate) {
				return !!this.timingToUpdate.clockOut;
			}

			return false;
		}
	}
}