import { Table } from "antd";
import TitleText from "../../Components/TitleText";

import { columnData, dataSource } from "../../datas/tabledatas/products";
import useProducts from "../../api/useProducts";
import { useEffect } from "react";

const Products = () => {
  const { products, getProdcutList } = useProducts();
  useEffect(() => {
    getProdcutList();
  }, []);
  return (
    <div>
      <TitleText title="Products" />
      <div className="py-5">
        <Table dataSource={products} columns={columnData} />
      </div>
    </div>
  );
};

export default Products;
