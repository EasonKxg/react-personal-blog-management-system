import axios from "axios";
import { message } from "antd";
import baseURL from "./config";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJreGciLCJpYXQiOjE2ODk4NjA3MTUsImV4cCI6MTY5MTA3MDMxNX0.o0-Z7Vc_TuE14r-t2NkYG4IYk04NEjBgFN4m2Y7N2ZHvM1LSXJinVdrkTVmZQJwLxu-BAxluiwsgZZouUD8rejmoh4W1ck4oHH6yhhYqQigsuzf1vD1XGcgnpjAFOptHOzuXf5o-7TWAxciGojpBBU_naC2Vq9wE5VO_EOppUuuf9H42DBbF394hoUjwyBZOL-tuYCdfkD1C_EFAekfkDAUnAuh6CgVqHPJucz8jH8IgUv6N4jPImHooDIDPiEc0mmW6PpJiwhgXC5jwp467ccz7Two0GnwGVjAqxgtlhvYJeo9lyLJjbB42iMGp54ZqbmNKZuTpYu685tIDBrWa7Q";

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
