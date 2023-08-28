import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const onRequest = (config) => {
  //   config.headers["Strict-Transport-Security"] =
  //     "max-age=31536000; includeSubDomains";
  //   config.headers["Content-Security-Policy"] = "script-src 'self'";
  //   config.headers["X-Frame-Options"] = "SAMEORIGIN";
  //   config.headers["X-Content-Type-Options"] = "nosniff";
  //   config.headers["Referrer-Policy"] = "no-referrer";
  //   config.headers["Permissions-Policy"] =
  //     "geolocation 'self' ; microphone 'none'";
  return config;
};

const onRequestError = async (error) => {
  return Promise.reject(error);
};

const onResponse = async (response) => {
  //   let message = "";
  return response;
};
const onResponseError = async (error) => {
  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance) {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
