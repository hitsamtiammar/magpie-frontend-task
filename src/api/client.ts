import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const client: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        try {
            const token = Cookies.get('TOKEN')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        } catch (error) {
            console.error('Error retrieving token:', error);
            return config;
        }
    },
    (error: Error) => {
        console.log('Error come here', error)
        return Promise.reject(error);
    }
);

client.interceptors.response.use(
    (res) => {
        console.log('Response done', res)
        return  res
    },
    (error:AxiosError<{message: string}>) => {
        console.log('An error ocured', error)
        return Promise.reject(error)
    }
)

export default client;