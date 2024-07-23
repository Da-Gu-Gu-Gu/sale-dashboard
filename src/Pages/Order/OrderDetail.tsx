import BackButton from "../../Components/BackButton";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select, Table } from "antd";
import { orderDetailColumnData, orderDetailData } from "../../datas/order";
import { useState } from "react";
const OrderDetail = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <BackButton />
        <div className="gap-3 flex">
          <Button
            type={isEdit ? "primary" : "dashed"}
            size="middle"
            className="w-[100px]"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            {isEdit ? "Save" : "Update"}
          </Button>
          <Button
            type="primary"
            size="middle"
            className="bg-green-400 text-md hover:bg-green-300"
          >
            Make Invoice
          </Button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex p-5 w-full justify-between items-center">
          <div className=" w-1/5 min-w-max flex flex-col gap-3  ">
            <p className="">Customer Info</p>

            <div className="flex  gap-5 ">
              <div className="flex items-center gap-2 font-semibold text-md">
                <UserOutlined className="text-lg text-blue-500 font-bold" />
                <p>Hein Htet Aung</p>
              </div>
              <div className="flex items-center gap-2 font-semibold text-md">
                <PhoneOutlined className="text-lg text-blue-500" />
                <p>083232323</p>
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
                disabled={isEdit ? false : true}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
            <div>
              <p className=" pb-1">Date</p>
              <DatePicker
                disabled={isEdit ? false : true}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
        {/* products */}
        <div className="px-5 py-3">
          <p className="text-xl py-2">Products List</p>
          <Table
            pagination={false}
            dataSource={orderDetailData}
            columns={orderDetailColumnData}
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

export default OrderDetail;
