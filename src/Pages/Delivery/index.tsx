import { Button, Table } from "antd";
import TitleText from "../../Components/TitleText";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../routes/data";
import { PlusCircleOutlined } from "@ant-design/icons";
import useDelivery from "../../api/useDeliver";
import { columnData } from "../../datas/tabledatas/delivery";

const Delivery = () => {
  const { delivery, getDeliverList } = useDelivery();
  const [isDeleted, setDeleted] = useState(false);
  useEffect(() => {
    getDeliverList();
  }, [isDeleted]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleText title="Delivery Lists" />
        <Link to={paths.deliveryCreate}>
          <Button size="middle" icon={<PlusCircleOutlined />} type="primary">
            Create Delivery
          </Button>
        </Link>
      </div>
      <div className="py-5">
        <Table dataSource={delivery} columns={columnData(setDeleted)} />
      </div>
    </div>
  );
};

export default Delivery;
