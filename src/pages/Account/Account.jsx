import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Table, Button, Modal, Input } from "antd";
import { feachAccountDataAction } from "store/modules/account";
import { deleteUserById, updateUser } from "services/account";
// import { columns } from "./config";
import { AccountStyleWrap } from "./style";

const Account = memo(() => {
  const dispatch = useDispatch();
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowUpdateModal, setIsShowUpdateModal] = useState(false);
  const [changeRow, setChangeRow] = useState({});
  const [userName, setUserName] = useState("");

  useEffect(() => {
    dispatch(feachAccountDataAction());
  }, [dispatch]);

  const { userList } = useSelector((state) => {
    return {
      userList: state.accountModule.userList,
    };
  }, shallowEqual);

  async function handleConfirnClick() {
    const name = changeRow.name;
    const data = await deleteUserById(name);
    console.log(data);
  }
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "用户名",
      dataIndex: "name",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
    },
    {
      title: "操作",
      dataIndex: "operation",
      render: (_, record) => {
        return (
          <>
            <Button type="text" onClick={handleUpdateClick}>
              更新
            </Button>
            <Button type="text" onClick={(evt) => handleDetailClick(record)}>
              删除
            </Button>
          </>
        );
      },
    },
  ];

  function handleUpdateClick(row) {
    setIsShowUpdateModal(true);
  }

  async function handleConfirnUpdateClick() {
    console.log(userName, "userName");
    const data = await updateUser(userName);
    console.log(data, "userName");
  }

  function handleDetailClick(row) {
    setChangeRow(row);
    setIsShowDeleteModal(true);
  }
  return (
    <AccountStyleWrap>
      <Table columns={columns} dataSource={userList} rowKey="id" />
      <Modal
        title="是否删除该用户?"
        open={isShowDeleteModal}
        okText="确认"
        cancelText="取消"
        onCancel={() => setIsShowDeleteModal(false)}
        onOk={handleConfirnClick}
      ></Modal>

      <Modal
        title="更新用户信息"
        open={isShowUpdateModal}
        okText="确认"
        cancelText="取消"
        onCancel={() => setIsShowUpdateModal(false)}
        onOk={handleConfirnUpdateClick}
      >
        <Input
          onInput={(evt) => setUserName(evt.target.value)}
          placeholder="请输入用户名称"
        />
      </Modal>
    </AccountStyleWrap>
  );
});

export default Account;
