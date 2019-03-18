import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hf-app-23.firebaseio.com/'
});

export default instance;