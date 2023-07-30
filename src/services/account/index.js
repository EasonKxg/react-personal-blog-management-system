import request from "services";

// 获取所有的用户
export function getAllUserList(data) {
  return request.get({
    url: "/user/list",
    data,
  });
}

// 删除用户
export function deleteUserById(name) {
  return request.delete({
    url: `/user/delete/${name}`,
  });
}

// 更新用户
export function updateUser(name) {
  return request.patch({
    url: `/user/update`,
    data: {
      name,
    },
  });
}
