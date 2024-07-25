import BackButton from "../../Components/BackButton";
import {
  BankOutlined,
  CompressOutlined,
  TruckOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Alert, Button, DatePicker, Table } from "antd";
import { saleCreateColumnData } from "../../datas/tabledatas/sale";
import { useState } from "react";
import ProductsDropDown from "../../Components/ProductsDropDown";
import CustomerDropDown from "../../Components/CustomerDropDown";

import SaleChannelDropDown from "../../Components/SaleChannelDropDown";
import { useCreateSale } from "../../api/useSales";
import { useNavigate } from "react-router-dom";
import PaymentDropDown from "../../Components/PaymentDropDown";
import { Dayjs } from "dayjs";
import DeliveryDropDown from "../../Components/DeliveryDropDown";

const CreateSale = () => {
  const [selecteProdcuts, setSelectedProducts] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [customerId, setCustomerId] = useState("1");
  const [channelId, setChannelId] = useState("1");
  const [paymentId, setPaymentId] = useState("1");
  const [deliveryId, setDeliveryId] = useState("1");
  const { loading, createSaleInvoice } = useCreateSale();
  const navigate = useNavigate();

  const handleQtyChange = (id: string, newQty: number) => {
    const updatedOrderProducts: any = selecteProdcuts.map((item: any) =>
      item.id == id ? { ...item, qty: newQty } : { ...item, qty: item.qty ?? 1 }
    );
    setSelectedProducts(updatedOrderProducts);
  };

  const calculateGrandTotal = () => {
    return selecteProdcuts
      .reduce((total: number, product: any) => {
        return total + product.product_price * product.qty;
      }, 0)
      .toFixed(2);
  };

  const creatSaleHandler = () => {
    const payload = {
      date: date,
      customerId: customerId,
      channelId: channelId,
      paymentId: paymentId,
      deliverId: deliveryId,
      status: false,
      orderProducts: selecteProdcuts,
      total: calculateGrandTotal(),
    };
    createSaleInvoice(payload);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
      navigate("/");
    }, 500);
  };

  return (
    <div className="relative">
      <div className="w-full flex justify-center absolute top-0 left-1/2 -translate-x-1/2">
        {alertVisible && (
          <Alert
            className=" w-[150px]"
            type="success"
            message={"Success"}
            closable
            showIcon
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <BackButton />
        <div className="gap-3 flex">
          <Button
            size="middle"
            type="primary"
            loading={loading}
            onClick={creatSaleHandler}
            className="bg-green-400 w-[100px] text-md hover:!bg-green-500"
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex p-5 w-full gap-10 items-center">
          <div className=" min-w-max flex flex-col gap-3  ">
            <p className="">Customer</p>

            <div className="flex  gap-5 ">
              <div className="flex  items-center gap-2 font-semibold text-md">
                <UserOutlined className="text-lg text-blue-500 font-bold" />
                <CustomerDropDown data={{}} setCustomerId={setCustomerId} />
              </div>
            </div>
          </div>

          <div className=" min-w-max flex flex-col gap-3  ">
            <p className="pb-1">Payment Methods</p>
            <div className="flex items-center gap-2 font-semibold text-md">
              <BankOutlined className="text-lg text-blue-500 font-bold" />
              <PaymentDropDown setPaymentId={setPaymentId} data={{}} />
            </div>
          </div>
          <div className=" min-w-max flex flex-col gap-3  ">
            <p className=" pb-1">Sale Channel</p>
            <div className="flex items-center gap-2 font-semibold text-md">
              <CompressOutlined className="text-lg text-blue-500 font-bold" />
              <SaleChannelDropDown setChannelId={setChannelId} data={{}} />
            </div>
          </div>
          <div className=" min-w-max flex flex-col gap-3  ">
            <p className=" pb-1">Delivery Service</p>
            <div className="flex items-center gap-2 font-semibold text-md">
              <TruckOutlined className="text-lg text-blue-500 font-bold" />
              <DeliveryDropDown setDeliveryId={setDeliveryId} data={{}} />
            </div>
          </div>
          <div className=" min-w-max flex flex-col gap-3  ">
            <p className=" pb-1">Date</p>
            <DatePicker
              // defaultValue={date}
              value={date}
              onChange={(v: any) => {
                setDate(v);
              }}
            />
          </div>
        </div>
        {/* products */}
        <div className="px-5 py-3">
          <p className="text-xl py-2">Products List</p>
          <ProductsDropDown
            selecteProdcuts={selecteProdcuts}
            setSelectedProducts={setSelectedProducts}
          />
          <Table
            className="py-3"
            key={"id"}
            pagination={false}
            dataSource={selecteProdcuts}
            columns={saleCreateColumnData(selecteProdcuts, handleQtyChange)}
          />
          <div>
            <div className="float-right flex justify-between px-5 py-3 w-[300px] bg-blue-400">
              <p className="text-white font-semibold">Grand Total </p>
              <p className="text-white font-bold">$ {calculateGrandTotal()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSale;
