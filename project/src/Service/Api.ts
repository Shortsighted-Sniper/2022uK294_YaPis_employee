import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const BASE_URL = `http://localhost:3030/`;

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

defaultAxiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    let correctPath: boolean = config.url !== "login";
    if (localStorage.getItem("token") !== "" && correctPath) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
    },

    (error: AxiosError) => {
        return Promise.reject(error);
    }
) 