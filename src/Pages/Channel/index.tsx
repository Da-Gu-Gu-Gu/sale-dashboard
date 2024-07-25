import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnData } from "../../datas/tabledatas/channels";
import useSaleChannel from "../../api/useSaleChannel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";
import { PlusCircleOutlined } from "@ant-design/icons";

const SaleChannel = () => {
  const { channels, getChannelList } = useSaleChannel();
  const [isDeleted, setDeleted] = useState(false);
  useEffect(() => {
    getChannelList();
  }, [isDeleted]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleText title="Sale Channel Lists" />
        <Link to={paths.channelCreate}>
          <Button size="middle" icon={<PlusCircleOutlined />} type="primary">
            Create Channel
          </Button>
        </Link>
      </div>
      <div className="py-5">
        <Table
          rowKey="id"
          dataSource={channels}
          columns={columnData(setDeleted)}
        />
      </div>
    </div>
  );
};

export default SaleChannel;
