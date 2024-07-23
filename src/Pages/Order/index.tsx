import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";
import { columnsData, dataSource } from "../../datas/order";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";

const Order = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleText title="Order Lists" />
        <Link to={paths.orderCreate}>
          <Button size="middle" icon={<PlusCircleOutlined />} type="primary">
            Create Order
          </Button>
        </Link>
      </div>
      <div className="py-5">
        <Table dataSource={dataSource} columns={columnsData} />
      </div>
    </div>
  );
};

export default Order;
