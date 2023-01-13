import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class AdapterService {
  requestAPI: AxiosInstance;

  constructor() {
    this.requestAPI = axios.create({
      baseURL: "https://test.employee.tokoweb.xyz/api",
    });

    this.requestAPI.interceptors.request.use((config) =>
      this.interceptToken(config)
    );

    this.requestAPI.interceptors.response.use(
      (onFullfilled) => onFullfilled,
      (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            window.localStorage.removeItem("auth");

            location.href = "/login";

            throw new Error(error.response.data.message);
          }

          throw new Error(error.response.data.message);
        }
        throw error;
      }
    );
  }

  interceptToken(config: AxiosRequestConfig) {
    const getAuthLs: any = localStorage.getItem("auth");

    const authInfo = JSON.parse(getAuthLs);

    const token = authInfo?.["auth-user"]?.data.token;

    if (token) {
      config.headers = Object.assign({}, config.headers, {
        Authorization: `Bearer ${token}`,
      });
    }

    return config;
  }

  sendGetRequest(url: string, params = {}) {
    return this.requestAPI.get(url, { params });
  }

  sendPostRequest(url: string, body = {}, params = {}) {
    return this.requestAPI.post(url, body, { params });
  }

  sendPutRequest(url: string, body = {}, params = {}) {
    return this.requestAPI.put(url, body, { params });
  }

  sendDeleteRequest(url: string, body = {}) {
    return this.requestAPI.delete(url, { data: body });
  }
}
