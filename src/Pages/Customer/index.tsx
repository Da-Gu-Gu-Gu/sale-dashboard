import { Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnData, dataSource } from "../../datas/customer";

const Customer = () => {
  return (
    <div>
      <TitleText title="Customer Lists" />
      <div className="py-5">
        <Table dataSource={dataSource} columns={columnData} />
      </div>
    </div>
  );
};

export default Customer;
