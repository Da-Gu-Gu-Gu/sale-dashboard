import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnsData } from "../../datas/tabledatas/sale";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";
import { useEffect } from "react";
import useSalesList from "../../api/useSales";

const Sale = () => {
  const { sales, getSales } = useSalesList();
  useEffect(() => {
    getSales();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleText title="Sale Lists" />
        <Link to={paths.saleCreate}>
          <Button size="middle" icon={<PlusCircleOutlined />} type="primary">
            Create Sale
          </Button>
        </Link>
      </div>
      <div className="py-5">
        <Table dataSource={sales} columns={columnsData} />
      </div>
    </div>
  );
};

export default Sale;
