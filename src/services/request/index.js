import axios from "axios";
import { Route } from "react-router-dom";
import { message } from "antd";
import baseURL from "./config";

const token = window.localStorage.getItem("token");

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.request.use(
      (config) => {
        config["headers"]["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data || null;

        if (data.code === 200) {
          message.success(data.msg);
        }

        return data;
      },
      (err) => {
        const { data } = err.response;
        if (data.code !== 200) {
          message.error(data.msg);
        }

        console.log(data, Route, "Route");
        if (data.code === 401) {
          window.location.href = "/#/login";
        }
        return err.response;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.request({ ...config, method: "POST" });
  }

  delete(config) {
    return this.request({ ...config, method: "DELETE" });
  }

  patch(config) {
    return this.request({ ...config, method: "PATCH" });
  }
}

const request = new Request(baseURL);
export default request;
