import { Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnData, dataSource } from "../../datas/channels";

const SaleChannel = () => {
  return (
    <div>
      <TitleText title="Sale Channels" />
      <div className="py-5">
        <Table dataSource={dataSource} columns={columnData} />
      </div>
    </div>
  );
};

export default SaleChannel;
