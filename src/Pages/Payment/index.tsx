import { Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnsData, dataSource } from "../../datas/payment";

const Payments = () => {
  return (
    <div>
      <TitleText title="Payment Methods" />
      <div className="py-5">
        <Table dataSource={dataSource} columns={columnsData} />
      </div>
    </div>
  );
};

export default Payments;
