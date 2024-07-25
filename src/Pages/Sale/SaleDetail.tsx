import BackButton from "../../Components/BackButton";
import {
  BankOutlined,
  CompressOutlined,
  TruckOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Alert, Button, DatePicker, Table } from "antd";
import { saleDetailColumnData } from "../../datas/tabledatas/sale";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSales, useUpdateSale } from "../../api/useSales";
import CustomerDropDown from "../../Components/CustomerDropDown";
import SaleChannelDropDown from "../../Components/SaleChannelDropDown";
import PaymentDropDown from "../../Components/PaymentDropDown";
import dayjs from "dayjs";
import DeliveryDropDown from "../../Components/DeliveryDropDown";

const SaleDetail = () => {
  const { loading: updateLoading, updateSaleInvoice } = useUpdateSale();
  const [alertVisible, setAlertVisible] = useState(false);
  const [saleDetail, setSaleDetail] = useState<any>({});
  const [isEdit, setIsEdit] = useState(false);
  const { id }: any = useParams();
  const { sale, getSale, loading } = useSales();
  const [customerId, setCustomerId] = useState();
  const [channelId, setChannelId] = useState();
  const [paymentId, setPaymentId] = useState();
  const [deliverId, setDeliveryId] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getSale(id);
  }, [id, loading]);

  useEffect(() => {
    if (!loading) {
      setSaleDetail(sale);
      setCustomerId(sale?.customer?.id);
      setChannelId(sale?.channel?.id);
      setPaymentId(sale?.payment?.id);
      setDeliveryId(sale?.deliver?.id);
      setDate(sale?.sale?.date);
    }
  }, [loading, sale]);

  const handleQtyChange = (id: number, newQty: number) => {
    const updatedOrderProducts = saleDetail?.sale?.orderProducts.map(
      (item: any) => (item.id == id ? { ...item, qty: newQty } : item)
    );

    setSaleDetail((prevState: any) => ({
      ...prevState,
      sale: {
        ...prevState.sale,
        orderProducts: updatedOrderProducts,
      },
    }));
  };

  const calculateGrandTotal = () => {
    const products = saleDetail?.sale?.orderProducts || [];
    return products
      .reduce((total: number, product: any) => {
        return total + product.product_price * product.qty;
      }, 0)
      .toFixed(2);
  };

  const updateSaleInvoiceHandler = () => {
    const payload = {
      ...saleDetail.sale,
      customerId: customerId,
      channelId: channelId,
      paymentId: paymentId,
      deliverId: deliverId,
      // id: id,
      total: calculateGrandTotal(),
      date: date,
    };
    updateSaleInvoice(id, payload);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  const makeSaleInvoice = () => {
    const payload = {
      ...saleDetail.sale,
      customerId: customerId,
      channelId: channelId,
      paymentId: paymentId,
      // id: Number(id),
      status: true,
      total: calculateGrandTotal(),
      date: date,
    };
    updateSaleInvoice(id, payload);
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
            loading={updateLoading}
            type={isEdit ? "primary" : "dashed"}
            size="middle"
            className="w-[100px]"
            disabled={saleDetail?.sale?.status}
            onClick={() => {
              isEdit && updateSaleInvoiceHandler();
              setIsEdit(!isEdit);
            }}
          >
            {isEdit ? "Save" : "Update"}
          </Button>
          <Button
            type="primary"
            size="middle"
            disabled={saleDetail?.sale?.status}
            onClick={() => makeSaleInvoice()}
            className={`text-md bg-green-400 ${
              !saleDetail?.sale?.status && "hover:!bg-green-500"
            } `}
          >
            Make Invoice
          </Button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex p-5 w-full  gap-10 items-center">
          <div className=" min-w-max flex flex-col gap-3">
            <p className="">Customer Info</p>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 font-semibold text-md">
                <UserOutlined className="text-lg text-blue-500 font-bold" />
                <CustomerDropDown
                  disable={!isEdit}
                  setCustomerId={setCustomerId}
                  data={saleDetail?.customer}
                />
              </div>
            </div>
          </div>

          <div className=" min-w-max flex flex-col gap-3">
            <p className="pb-1">Payment Methods</p>
            <div className="flex items-center gap-2 font-semibold text-md">
              <BankOutlined className="text-lg text-blue-500 font-bold" />
              <PaymentDropDown
                disable={!isEdit}
                setPaymentId={setPaymentId}
                data={saleDetail?.payment}
              />
            </div>
          </div>
          <div className=" min-w-max flex flex-col gap-3">
            <p className="pb-1">Sale Channel</p>
            <div className="flex items-center gap-2 font-semibold text-md">
              <CompressOutlined className="text-lg text-blue-500 font-bold" />
              <SaleChannelDropDown
                disable={!isEdit}
                setChannelId={setChannelId}
                data={saleDetail?.channel}
              />
            </div>
          </div>
          <div className=" min-w-max flex flex-col gap-3  ">
            <p className=" pb-1">Delivery Service</p>
            <div className="flex items-center gap-2 font-semibold text-md">
              <TruckOutlined className="text-lg text-blue-500 font-bold" />
              <DeliveryDropDown
                disable={!isEdit}
                setDeliveryId={setDeliveryId}
                data={saleDetail?.deliver}
              />
            </div>
          </div>
          <div className=" min-w-max flex flex-col gap-3">
            <p className="pb-1">Date</p>
            <DatePicker
              // defaultValue={date}
              disabled={!isEdit}
              variant={isEdit ? "outlined" : "borderless"}
              className={`w-[150px] ${
                !isEdit ? "bg-white text-black" : "custom-select"
              }`}
              value={dayjs(date)}
              onChange={(v: any) => {
                setDate(v);
              }}
            />
          </div>
        </div>

        <div className="px-5 py-3">
          <p className="text-xl py-2">Products List</p>
          <Table
            pagination={false}
            loading={loading}
            rowKey="productId"
            dataSource={saleDetail?.sale?.orderProducts}
            columns={saleDetailColumnData(
              saleDetail?.sale?.orderProducts,
              handleQtyChange
            )}
          />
          <div>
            <div className="float-right flex justify-between px-5 py-3 w-[300px] bg-blue-400">
              <p className="text-white font-semibold">Grand Total </p>
              <p className="text-white font-bold">${calculateGrandTotal()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleDetail;
