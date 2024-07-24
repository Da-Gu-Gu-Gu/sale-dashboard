import BackButton from "../../Components/BackButton";
import { UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Table } from "antd";
import { saleCreateColumnData } from "../../datas/tabledatas/sale";
import { useState } from "react";
import ProductsDropDown from "../../Components/ProductsDropDown";
import CustomerDropDown from "../../Components/CustomerDropDown";

import SaleChannelDropDown from "../../Components/SaleChannelDropDown";
import { useCreateSale } from "../../api/useSales";

const CreateSale = () => {
  const [selecteProdcuts, setSelectedProducts] = useState([]);
  const [date, setDate] = useState(Date.now());
  const [customerId, setCustomerId] = useState("1");
  const [channelId, setChannelId] = useState("1");
  const { loading, createSaleInvoice } = useCreateSale();

  console.log(selecteProdcuts);

  const handleQtyChange = (id: number, newQty: number) => {
    const updatedOrderProducts: any = selecteProdcuts.map((item: any) =>
      item.id === id ? { ...item, qty: newQty } : item
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
      id: String(3999),
      date: date,
      customerId: customerId,
      channelId: channelId,
      status: false,
      orderProducts: selecteProdcuts,
      total: calculateGrandTotal(),
    };
    console.log(payload);
    createSaleInvoice(payload);
  };

  console.log(selecteProdcuts);
  return (
    <div>
      <div className="flex justify-between items-center">
        <BackButton />
        <div className="gap-3 flex">
          <Button
            size="middle"
            type="primary"
            loading={loading}
            onClick={creatSaleHandler}
            className="bg-green-400 w-[100px] text-md hover:bg-green-300"
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex p-5 w-full justify-between items-center">
          <div className=" w-1/5 min-w-max flex flex-col gap-3  ">
            <p className="">Customer</p>

            <div className="flex  gap-5 ">
              <div className="flex items-center gap-2 font-semibold text-md">
                <UserOutlined className="text-lg text-blue-500 font-bold" />
                <CustomerDropDown data={{}} setCustomerId={setCustomerId} />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <p className=" pb-1">Sale Channel</p>
              <SaleChannelDropDown setChannelId={setChannelId} data={{}} />
            </div>
            <div>
              <p className=" pb-1">Date</p>
              <DatePicker
                // defaultValue={date}
                onChange={(v: any) => {
                  setDate(v);
                }}
              />
            </div>
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
