import BackButton from "../../Components/BackButton";
import { UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select, Table } from "antd";
// import { orderDetailColumnData, orderDetailData } from "../../datas/order";
import type { SelectProps } from "antd";

import { orderCreateColumnData } from "../../datas/order";
import { dataSource } from "../../datas/products";
import { useState } from "react";

const options = dataSource.map((x) => {
  return {
    label: x.product_name,
    value: JSON.stringify(x),
  };
});

console.log(options);

const CreateOrder = () => {
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
                <Select
                  defaultValue="lucy"
                  style={{ width: 120 }}
                  onChange={() => {}}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <p className=" pb-1">Sale Channel</p>
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={() => {}}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
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
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            onChange={(value: []) => {
              const productsArray: any = value.map((item) => JSON.parse(item));
              setSelectedProducts(productsArray);
            }}
            options={options}
          />
          <Table
            className="py-3"
            pagination={false}
            dataSource={selecteProdcuts}
            columns={orderCreateColumnData}
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

export default CreateOrder;
