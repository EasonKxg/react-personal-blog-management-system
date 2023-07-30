import request from "services";

export function getLabelList() {
  return request.get({
    url: "/label/list",
  });
}

export function labelInsert(data) {
  return request.post({
    url: "/label/insert",
    data,
  });
}
