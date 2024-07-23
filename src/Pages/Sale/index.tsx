import { Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnData, dataSource } from "../../datas/sale";

const Sale = () => {
  return (
    <div>
      <TitleText title="Sale Invoices" />
      <div className="py-5">
        <Table dataSource={dataSource} columns={columnData} />
      </div>
    </div>
  );
};

export default Sale;
