import axios from '../../node_modules/axios';

const instance = axios.create({
    baseURL:'https://burger-app-8fcbd.firebaseio.com/'
});

export default instance;

