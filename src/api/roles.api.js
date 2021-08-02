import axios from 'axios'

export default  {

    getRoles() {
        return axios.get('http://localhost:8080/roles.json')
    }

}
