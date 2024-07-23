import { Table } from "antd";
import TitleText from "../../Components/TitleText";

import { columnData, dataSource } from "../../datas/products";

const Products = () => {
  return (
    <div>
      <TitleText title="Products" />
      <div className="py-5">
        <Table dataSource={dataSource} columns={columnData} />
      </div>
    </div>
  );
};

export default Products;
