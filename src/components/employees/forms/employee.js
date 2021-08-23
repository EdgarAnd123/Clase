import imageComponent from "../../shared/image/image.vue"

export default {
    name: 'employeeForm',
    props: {
        'employee': Object
    },
    
    components: {
        'card-image': imageComponent
    },

    computed: {
        workingHours() {
            return this.$root.$store.getters.getWorkingHours;
        },

        roles() {
            return this.$root.$store.getters.getRoles;
        }
    },

    methods: {
        triggerParentMethod(event) {
            event.preventDefault();
            this.$parent.save();
        },

        validateString(string = '', initialIndex, endingIndex){
            return string.substring(initialIndex, endingIndex);
        },

        async onFileChange(event) {
            const files = event.target.files;

            if (!files.length) {
                return this.imageSrc = null;
            }

            const byteFile = await this.getAsByteArray(files[0]);
            this.employee.attachment[0] = byteFile;
        },

        async getAsByteArray(file) {
            return new Uint8Array(await this.readFile(file))
        },

        readFile(file) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader()
            
                reader.addEventListener("loadend", e => resolve(e.target.result))
                reader.addEventListener("error", reject)
            
                reader.readAsArrayBuffer(file)
              })
        },

        phoneNumberFormatter(inputId) {
            const inputField = document.getElementById(inputId);
            const formattedInputValue = this.formatPhoneNumber(inputField.value);
            
            inputField.value = formattedInputValue;
        },
        
        formatPhoneNumber(value) {
            if (!value) return value;

            const phoneNumber = value.replace(/[^\d]/g, "");
            const phoneNumberLength = phoneNumber.length;

            if (phoneNumberLength < 3) return phoneNumber;
            
            if (phoneNumberLength < 7) {
              return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
            }
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
        },
    },

    filters: {
        defaultValue(value) {
            if(!value) return '8';

            return value;
        }
    }
};