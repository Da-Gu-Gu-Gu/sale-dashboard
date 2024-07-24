import { Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnData, dataSource } from "../../datas/tabledatas/channels";
import useSaleChannel from "../../api/useSaleChannel";
import { useEffect } from "react";

const SaleChannel = () => {
  const { channels, getChannelList } = useSaleChannel();
  useEffect(() => {
    getChannelList();
  }, []);
  return (
    <div>
      <TitleText title="Sale Channels" />
      <div className="py-5">
        <Table dataSource={channels} columns={columnData} />
      </div>
    </div>
  );
};

export default SaleChannel;
