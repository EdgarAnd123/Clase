import axios from 'axios'

export default {

    getEmployees() {
        return axios.get("http://localhost:8080/employees.json")
    },

    getEmployee(payload) {
        return axios.get(`http://localhost:3000/employees/${payload}`)
    },

    delete(payload) {
        return axios.delete(`http://localhost:3000/employees/${payload}`)
    },

    post(payload) {
        return axios.post("http://localhost:3000/employees", payload)
    },

    patch(payload) {
        return axios.put(`http://localhost:3000/employees/${payload.id}`, payload)
    }
}