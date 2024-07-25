import {
  CalendarOutlined,
  ProductOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Divider } from "antd";
import dayjs from "dayjs";
import { dateFormat } from "../../utils/utils";
import BarChart from "./BarChart";
import LineChart from "./PieChart";
import PieChart from "./PieChart";

const Home = () => {
  const saleData = [
    { date: "2023-01-01", value: 10 },
    { date: "2023-01-02", value: 20 },
    { date: "2023-01-03", value: 30 },
    { date: "2023-01-04", value: 25 },
    { date: "2023-01-05", value: 15 },
    { date: "2023-01-05", value: 15 },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-[90%] mx-auto my-5">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <Avatar
              className="bg-blue-400 "
              size={45}
              shape="square"
              icon={<UserOutlined />}
            />
            <div>
              <h1 className="text-2xl font-semibold ">Welcome, Admin </h1>
              <p className=" text-gray-400">
                Check the sale data here easily. Have a great day.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar
              size={40}
              className="bg-blue-400 text-2xl"
              icon={<CalendarOutlined />}
            />
            <p className="text-md font-semibold ">
              {dayjs(Date.now()).format(dateFormat)}
            </p>
          </div>
        </div>
        <Divider />
        <div className="flex gap-5 ">
          <div className="w-1/3 flex gap-3 border-r">
            <Avatar
              size={40}
              className="bg-gray-200/50 text-2xl"
              icon={<ShoppingOutlined className="text-blue-700" />}
            />
            <div>
              <h1 className="text-md">Sales</h1>
              <p className="text-2xl font-semibold">400</p>
            </div>
          </div>
          <div className="w-1/3 flex gap-3 border-r">
            <Avatar
              size={40}
              className="bg-gray-200/50 text-2xl"
              icon={<ProductOutlined className="text-blue-700" />}
            />
            <div>
              <h1 className="text-md">Products</h1>
              <p className="text-2xl font-semibold">400</p>
            </div>
          </div>
          <div className="w-1/3 flex gap-3 ">
            <Avatar
              size={40}
              className="bg-gray-200/50 text-2xl"
              icon={<UserOutlined className="text-blue-700" />}
            />
            <div>
              <h1 className="text-md">Customers</h1>
              <p className="text-2xl font-semibold">400</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="w-full  h-[300px] flex gap-3 overflow-hidden">
          <div className="w-[60%] h-full  p-4 rounded-md shadow">
            <h1 className=" text-lg mb-5 font-semibold border-l-2 pl-3 border-blue-400">
              Sale Data
            </h1>
            <div className="w-full h-[90%]">
              <BarChart data={saleData} />
            </div>
          </div>
          <div className="w-[40%] h-full p-4 rounded-md shadow">
            <h1 className=" text-lg mb-5 font-semibold border-l-2 pl-3 border-blue-400">
              Customer Data
            </h1>
            <div className="h-[90%]">
              <PieChart data={saleData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
