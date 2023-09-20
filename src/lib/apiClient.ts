import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // your url here
});
axiosInstance.interceptors.request.use((config) => {
  if (config?.headers) {
    config.headers.set('Content-Type', 'application/json');
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    // custom error handling

    Promise.reject(error)
);

export const apiClient = {
  get: <TResponse>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<TResponse>(url, {
      ...config,
    }),
  post: <TResponse, TBody = any>(url: string, data: TBody, config?: AxiosRequestConfig) =>
    axiosInstance.post<TResponse>(url, data, { ...config }),
  patch: <TResponse, TBody = any>(url: string, data: TBody, config?: AxiosRequestConfig) =>
    axiosInstance.patch<TResponse>(url, data, { ...config }),
  put: <TResponse, TBody = any>(url: string, data: TBody, config?: AxiosRequestConfig) =>
    axiosInstance.put<TResponse>(url, data, { ...config }),
  delete: <TResponse>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<TResponse>(url, { ...config }),
};
