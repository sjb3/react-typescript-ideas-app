import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BOUNCE_IT_TOKEN_KEY } from "../auth/auth.api";

export default class Api {
  private static axiosInstance: AxiosInstance;

  static init() {
    this.axiosInstance = Axios.create({
      baseURL: process.env.REACT_APP_API_BASEURL
    });

    this.addInterceptors();
  }
  private static addInterceptors() {
    this.axiosInstance.interceptors.request.use(request => {
      request.headers["authorization"] = `Bearer ${localStorage.getItem(
        BOUNCE_IT_TOKEN_KEY
      )}`;
      return request;
    });
  }

  static get<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get<T>(url, config);
  }

  static post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.axiosInstance.post<T>(url, data, config);
  }

  static request<T>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<T>(config);
  }
}
