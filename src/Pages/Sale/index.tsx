import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnsData } from "../../datas/tabledatas/sale";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";
import { useEffect, useState } from "react";
import useSalesList from "../../api/useSales";

const Sale = () => {
  const { sales, getSales, loading } = useSalesList();
  const [isDeleted, setDeleted] = useState(false);
  useEffect(() => {
    getSales();
  }, [loading, isDeleted]);

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
        <Table
          rowKey="id"
          loading={loading}
          dataSource={sales}
          columns={columnsData(setDeleted)}
        />
      </div>
    </div>
  );
};

export default Sale;
