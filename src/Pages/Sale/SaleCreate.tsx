import BackButton from "../../Components/BackButton";
import { UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Table } from "antd";
import { saleCreateColumnData } from "../../datas/tabledatas/sale";
import { useState } from "react";
import ProductsDropDown from "../../Components/ProductsDropDown";
import CustomerDropDown from "../../Components/CustomerDropDown";

import SaleChannelDropDown from "../../Components/SaleChannelDropDown";

const CreateSale = () => {
  const [selecteProdcuts, setSelectedProducts] = useState([]);
  console.log(selecteProdcuts);
  return (
    <div>
      <div className="flex justify-between items-center">
        <BackButton />
        <div className="gap-3 flex">
          <Button
            size="middle"
            type="primary"
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
                <CustomerDropDown />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <p className=" pb-1">Sale Channel</p>
              <SaleChannelDropDown />
            </div>
            <div>
              <p className=" pb-1">Date</p>
              <DatePicker onChange={() => {}} />
            </div>
          </div>
        </div>
        {/* products */}
        <div className="px-5 py-3">
          <p className="text-xl py-2">Products List</p>
          <ProductsDropDown setSelectedProducts={setSelectedProducts} />
          <Table
            className="py-3"
            pagination={false}
            dataSource={selecteProdcuts}
            columns={saleCreateColumnData}
          />
          <div>
            <div className="float-right flex justify-between px-5 py-3 w-[300px] bg-blue-400">
              <p className="text-white font-semibold">Grand Total </p>
              <p className="text-white font-bold">$123232</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSale;
