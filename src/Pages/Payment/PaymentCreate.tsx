import { Avatar, Button, Form, Input, notification } from "antd";
import BackButton from "../../Components/BackButton";
import {
  AccountBookOutlined,
  BankOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useCreatePayment } from "../../api/usePayments";
import { useState } from "react";

const PaymentCreate = () => {
  const { createPayment, loading } = useCreatePayment();
  const [form] = Form.useForm();
  const [formError, setFormError] = useState<string | null>(null);

  const createHandler = async () => {
    try {
      const values = await form.validateFields();

      const payload = {
        payment_name: values.name,
        payment_account: values.account,
      };

      await createPayment(payload);

      notification.success({
        message: "Payment Method Created",
        description: "The Payment Method has been successfully created.",
      });

      form.resetFields();
    } catch (error: any) {
      console.error("Validation Failed:", error);
      setFormError(error.message);
    }
  };
  return (
    <div>
      <div className="w-full">
        <BackButton />
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 bg-white p-6 rounded-lg flex flex-col items-center px-10 gap-5">
          <Form
            form={form}
            className="w-full"
            initialValues={{}}
            layout="vertical"
          >
            <Avatar
              className="bg-blue-400 mb-5"
              size={64}
              icon={<BankOutlined />}
            />
            <Form.Item
              label="Payment Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the Payment's name" },
              ]}
            >
              <Input
                placeholder="Payment Name"
                className="border border-gray-400"
                size="large"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              label="Payment Account"
              name="account"
              rules={[
                {
                  required: true,
                  message: "Please enter the Payment's account",
                },
              ]}
            >
              <Input
                placeholder="Payment Account"
                className="border border-gray-400"
                size="large"
                prefix={<AccountBookOutlined />}
              />
            </Form.Item>

            {formError && <div className="text-red-500 mb-4">{formError}</div>}
            <Button
              type="primary"
              size="large"
              className="w-full"
              onClick={createHandler}
              loading={loading}
              icon={<SendOutlined />}
            >
              Create
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PaymentCreate;
