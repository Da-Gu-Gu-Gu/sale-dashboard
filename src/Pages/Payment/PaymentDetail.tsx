import { Avatar, Button, Form, Input, notification } from "antd";
import BackButton from "../../Components/BackButton";
import {
  AccountBookOutlined,
  BankOutlined,
  EditOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { usePaymentDetail, useUpdatePayment } from "../../api/usePayments";
import { useParams } from "react-router-dom";

const PaymentDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { loading, payment, getPayment } = usePaymentDetail();
  const { loading: updateLoading, updatePayment } = useUpdatePayment();
  const { id } = useParams();
  const [form] = Form.useForm();

  useEffect(() => {
    getPayment(id);
  }, [id, loading, updateLoading]);

  useEffect(() => {
    if (payment) {
      form.setFieldsValue({
        name: payment.payment_name,
        account: payment.payment_account,
      });
    }
  }, [payment, form]);

  const updateHandler = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        payment_name: values.name,
        payment_account: values.account,
      };
      await updatePayment(id, payload);
      notification.success({
        message: "Payment Updated",
        description: "The Payment details have been successfully updated.",
      });
      setIsEdit(false);
    } catch (error) {
      console.error("Update Failed:", error);
    }
  };

  return (
    <div>
      <div className="w-full">
        <BackButton />
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 bg-white p-6 rounded-lg flex flex-col items-center px-10 gap-5">
          <Avatar className="bg-blue-400" size={64} icon={<BankOutlined />} />
          <Form
            form={form}
            className="w-full"
            initialValues={{}}
            layout="vertical"
          >
            <Form.Item
              label="Payment Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the Payment's name" },
              ]}
            >
              <Input
                placeholder="Payment Name"
                className=" text-black  custom-disabled-input"
                size="large"
                style={{ backgroundColor: "white", color: "black" }}
                disabled={!isEdit}
                variant={isEdit ? "outlined" : "borderless"}
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              label="Payment account"
              name="account"
              rules={[
                {
                  required: true,
                  message: "Please enter the Payment's account",
                },
              ]}
            >
              <Input
                placeholder="Payment account"
                className=" text-black  custom-disabled-input"
                size="large"
                disabled={!isEdit}
                style={{ backgroundColor: "white", color: "black" }}
                variant={isEdit ? "outlined" : "borderless"}
                prefix={<AccountBookOutlined />}
              />
            </Form.Item>

            <Button
              type="primary"
              size="large"
              className={`w-full `}
              onClick={isEdit ? updateHandler : () => setIsEdit(true)}
              icon={isEdit ? <SendOutlined /> : <EditOutlined />}
              // loading={loading}
            >
              {isEdit ? "Update" : "Edit"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
