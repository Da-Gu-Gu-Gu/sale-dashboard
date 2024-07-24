import BackButton from "../../Components/BackButton";
import { UserOutlined } from "@ant-design/icons";
import { Alert, Button, DatePicker, Table } from "antd";
import { saleDetailColumnData } from "../../datas/tabledatas/sale";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSales, useUpdateSale } from "../../api/useSales";
import CustomerDropDown from "../../Components/CustomerDropDown";
import SaleChannelDropDown from "../../Components/SaleChannelDropDown";
import { dateFormat } from "../../utils/utils";
import { paths } from "../../routes/data";
import PaymentDropDown from "../../Components/PaymentDropDown";

const SaleDetail = () => {
  const { loading: updateLoading, updateSaleInvoice } = useUpdateSale();
  const [alertVisible, setAlertVisible] = useState(false);
  const [saleDetail, setSaleDetail] = useState<any>({});
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const { sale, getSale, loading } = useSales();
  const [customerId, setCustomerId] = useState();
  const [channelId, setChannelId] = useState();
  const [paymentId, setPaymentId] = useState();
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
      setDate(sale?.sale?.date);
    }
  }, [loading, sale]);

  const handleQtyChange = (id: number, newQty: number) => {
    const updatedOrderProducts = saleDetail?.sale?.orderProducts.map(
      (item: any) => (item.productId === id ? { ...item, qty: newQty } : item)
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
      customerId: Number(customerId),
      channelId: Number(channelId),
      id: Number(id),
      total: calculateGrandTotal(),
      date: date,
    };
    updateSaleInvoice(Number(id), payload);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  const makeSaleInvoice = () => {
    const payload = {
      ...saleDetail.sale,
      customerId: Number(customerId),
      channelId: Number(channelId),
      id: Number(id),
      status: true,
      total: calculateGrandTotal(),
      date: date,
    };
    updateSaleInvoice(Number(id), payload);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
      navigate("/");
    }, 500);
  };

  console.log(saleDetail, customerId, date);

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
            className="bg-green-400 text-md hover:bg-green-300"
          >
            Make Invoice
          </Button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex p-5 w-full justify-between items-center">
          <div className="w-1/5 min-w-max flex flex-col gap-3">
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
          <div className="flex gap-5">
            <div>
              <p className="pb-1">Payment Methods</p>
              <PaymentDropDown
                disable={!isEdit}
                setPaymentId={setPaymentId}
                data={saleDetail?.payment}
              />
            </div>
            <div>
              <p className="pb-1">Sale Channel</p>
              <SaleChannelDropDown
                disable={!isEdit}
                setChannelId={setChannelId}
                data={saleDetail?.channel}
              />
            </div>
            <div>
              <p className="pb-1">Date</p>
              <DatePicker
                defaultValue={date}
                disabled={!isEdit}
                format={dateFormat}
                onChange={(v) => {
                  if (v) {
                    setDate(v);
                  } else {
                    setDate("");
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="px-5 py-3">
          <p className="text-xl py-2">Products List</p>
          <Table
            pagination={false}
            loading={loading}
            rowKey="productId"
            dataSource={saleDetail?.sale?.orderProducts}
            // columns={saleDetailColumnData([], handleQtyChange)}
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
