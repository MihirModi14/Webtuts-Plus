import axios, { AxiosRequestHeaders } from "axios";
import { API_BASE_URL, ENDPOINT } from "./endpoints";
import { getAlert } from "../hooks";

const defaultHeaders = {
  "Content-Type": "application/json; charset=UTF-8",
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    ...defaultHeaders,
  },
});

const get = async (
  endpoint: string,
  headers: AxiosRequestHeaders = {},
  param: any = {},
  showAlert: boolean = false
) => {
  return axiosInstance
    .get(endpoint, {
      headers: {
        ...headers,
      },
      params: {
        ...param,
      },
    })
    .then((response) => {
      if (showAlert && response && response.data && response.data.message) {
        getAlert("success", response.data.message);
      }
      return response;
    })
    .catch((error) => {
      if (showAlert) {
        getAlert("error", error.message);
      }
      throw error;
    });
};

const post = async (
  endpoint: string,
  data: any = {},
  headers: AxiosRequestHeaders = {},
  showAlert: boolean = false
) => {
  return axiosInstance
    .post(endpoint, data, {
      headers: {
        ...headers,
      },
    })
    .then((response) => {
      if (showAlert && response && response.data && response.data.message) {
        getAlert("success", response.data.message);
      }
      return response;
    })
    .catch((error) => {
      if (showAlert) {
        if (endpoint === ENDPOINT.REGISTER) {
          getAlert("error", "user already exists", 3000, "top-right");
        } else if (endpoint === ENDPOINT.LOGIN) {
          getAlert("error", "please check crendentials", 3000, "top-right");
        } else {
          getAlert("error", error.message);
        }
        throw error;
      }
    });
};

const put = async (
  endpoint: string,
  data: any = {},
  headers: AxiosRequestHeaders = {},
  showAlert: boolean = false
) => {
  return axiosInstance
    .put(endpoint, data, {
      headers: {
        ...headers,
      },
    })
    .then((response) => {
      if (showAlert && response && response.data && response.data.message) {
        getAlert("success", response.data.message);
      }
      return response;
    })
    .catch((error) => {
      if (showAlert) {
        getAlert("error", error.message);
      }
      throw error;
    });
};

const deleteAPI = async (
  endpoint: string,
  data: any = {},
  headers: AxiosRequestHeaders = {},
  showAlert: boolean = false
) => {
  return axiosInstance
    .delete(endpoint, {
      headers: {
        ...headers,
      },
      data,
    })
    .then((response) => {
      if (showAlert && response && response.data && response.data.message) {
        getAlert("success", response.data.message);
      }
      return response;
    })
    .catch((error) => {
      if (showAlert) {
        getAlert("error", error.message);
      }
      throw error;
    });
};

export { get, post, put, deleteAPI };
