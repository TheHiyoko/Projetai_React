import axios from 'axios';

const http  = axios.create({
    baseURL: "https://cientizi.herokuapp.com"
})
export default http
