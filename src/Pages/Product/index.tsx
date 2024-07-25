import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";

import { columnData } from "../../datas/tabledatas/products";
import useProducts from "../../api/useProducts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";
import { PlusCircleOutlined } from "@ant-design/icons";

const Products = () => {
  const { products, getProdcutList } = useProducts();
  const [isDeleted, setDeleted] = useState(false);
  useEffect(() => {
    getProdcutList();
  }, [isDeleted]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleText title="Product Lists" />
        <Link to={paths.productCreate}>
          <Button size="middle" icon={<PlusCircleOutlined />} type="primary">
            Create Product
          </Button>
        </Link>
      </div>
      <div className="py-5">
        <Table dataSource={products} columns={columnData(setDeleted)} />
      </div>
    </div>
  );
};

export default Products;
