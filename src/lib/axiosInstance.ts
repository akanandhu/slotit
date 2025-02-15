/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

// Set config defaults when creating the instance
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
});

// Change request data/error here
axiosInstance.interceptors.request.use(
  (config: any) => {
    let token;

    if (typeof window !== 'undefined') {
      token = localStorage.getItem('accessToken');
    }

    config.headers = {
      ...config.headers,
        Authorization: `Bearer ${token ? token : ""}`,
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    };

    return config;
  },
  (error) => {
    console.log(error, 'the error');

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(undefined, async (error) => {
  return Promise.reject(error);
});
