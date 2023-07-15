import request from "services";

export function doLogin(data) {
  return request.post({
    url: "/user/doLogin",
    data,
  });
}

export function register(data) {
  return request.post({
    url: "/user/register",
    data,
  });
}
