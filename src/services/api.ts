import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://def-testnode.herokuapp.com/'
})