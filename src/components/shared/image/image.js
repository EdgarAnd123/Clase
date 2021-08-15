export default {
	props: {
		name: String,
		lastName: String,
		imageUrl: String,
		imageSize: Number,
		editable: Boolean,
		isActive: Boolean,
	},

	data() {
		return {
			imageSrc: null
		}
	},

	methods: {
		joinInitialLetters() {
			return !this.name[0] || !this.lastName[0] ? '+' : this.name[0] + this.lastName[0];
		},

		onFileChange(event) {
			const files = event.target.files;

			if (!files.length) {
				return this.imageSrc = null;
			}

			this.createImage(files[0]);
		},

		createImage(file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				this.imageSrc = e.target.result;
				this.$emit('input', this.imageSrc);
			};
			reader.readAsDataURL(file);
		}
	},

	computed: {
		image__outline_color() {
			if (this.isActive) {
				return { '--borderColor': '#72EEA6' };
			} else {
				return { '--borderColor': '#BB0000' };
			}
		},

		image__names_size_calculation() {
			return {
				'--width': `${this.imageSize}px`,
				'--height': `${this.imageSize}px`,
				'--fontSize': `${this.imageSize / 3}px`
			};
		},

		image() {
			return this.imageUrl || this.imageSrc;
		}
	},
}