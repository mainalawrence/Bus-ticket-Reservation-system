import axios from 'axios';

const base =axios.create({
    baseURL: 'http://localhost:5000/api/'
})
 export default base