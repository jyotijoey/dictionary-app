import axios from 'axios';

const instance = axios.create({
    baseURL:"https://fast-island-34255.herokuapp.com/"
});

export default instance;
