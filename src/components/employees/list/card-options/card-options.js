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
			const currentHours = this.date.getHours();
			const currentMinutes = this.date.getMinutes();

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