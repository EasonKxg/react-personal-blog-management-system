import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Input, Button, Table, message } from "antd";
import { labelInsert } from "services/label";
import { feachlabelDataAction } from "store/modules/label";
import { LabelStyleWrap } from "./style";

const Label = memo(() => {
  const disptach = useDispatch();
  const [req, setReq] = useState({
    name: "",
  });
  useEffect(() => {
    disptach(feachlabelDataAction());
  }, [disptach]);

  const { labelList } = useSelector((state) => {
    return {
      labelList: state.labelModule.labelList,
    };
  }, shallowEqual);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "标签",
      dataIndex: "name",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
    },
  ];

  async function handleSaveLabelClick() {
    if (!req.name) {
      return message.error("请输入标签");
    }
    const data = await labelInsert(req);
    
  }
  return (
    <LabelStyleWrap>
      <div className="top-wrap">
        <Input
          className="input"
          maxLength={6}
          placeholder="请输入标签名称"
          onInput={(e) => setReq({ ...req, name: e.target.value })}
        />
        <Button onClick={handleSaveLabelClick}>保存</Button>
      </div>
      <div className="content-wrap">
        <Table columns={columns} dataSource={labelList} rowKey="id" />
      </div>
    </LabelStyleWrap>
  );
});

export default Label;
