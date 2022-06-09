import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

// create a axios instance
const service = axios.create({
    timeout: 10000, // request timeout
});

// request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log('request error-->', error); // for debug
        return error;
    },
);

// response interceptors
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        console.log('response error-->', error);
        if (error.response) {
            return error.response;
        }
    },
);

export default service;
