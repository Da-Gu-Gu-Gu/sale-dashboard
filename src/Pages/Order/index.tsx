import { Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnsData, dataSource } from "../../datas/order";

const Order = () => {
  return (
    <div>
      <TitleText title="Order Lists" />
      <div className="py-5">
        <Table dataSource={dataSource} columns={columnsData} />
      </div>
    </div>
  );
};

export default Order;
