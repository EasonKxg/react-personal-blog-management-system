import ReactDom from "react-dom/client";
import { Button, Modal } from "antd";
export const columns = [
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
          <Button type="text" onClick={() => handleUpdateClick(record)}>
            更新
          </Button>
          <Button type="text" onClick={() => handleDetailClick(record)}>
            删除
          </Button>
        </>
      );
    },
  },
];

const el = (
  <Modal title="Basic Modal">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);

function handleUpdateClick(row) {
  console.log(row, "handleUpdateClick");
}

function handleDetailClick(row) {
  console.log(row, "handleDetailClick");
}
