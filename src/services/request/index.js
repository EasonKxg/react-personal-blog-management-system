import axios from "axios";
import { message } from "antd";
import baseURL from "./config";

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.request.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        const { data } = res;
        switch (data.code) {
          case 200:
            message.success(data.msg);
            break;
        }
        return data;
      },
      (err) => {
        const { data } = err.response;
        if (data.code !== 200) {
          message.error(data.msg);
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
}

const request = new Request(baseURL);
export default request;
