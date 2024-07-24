import { PhoneOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Form, notification } from "antd";
import { useCreateCustomer } from "../../api/useCustomer";
import { useState } from "react";
import BackButton from "../../Components/BackButton";

const { TextArea } = Input;

const CustomerCreate = () => {
  const { createCustomer, customer, loading } = useCreateCustomer();
  const [form] = Form.useForm();
  const [formError, setFormError] = useState<string | null>(null);

  const createHandler = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);

      const payload = {
        customer_name: values.name,
        customer_phone: values.phone,
        customer_address: values.address,
      };

      await createCustomer(payload);

      notification.success({
        message: "Customer Created",
        description: "The customer has been successfully created.",
      });

      form.resetFields();
    } catch (error) {
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
              icon={<UserOutlined />}
            />
            <Form.Item
              label="Customer Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the customer's name" },
              ]}
            >
              <Input
                placeholder="Customer Name"
                className="border border-gray-400"
                size="large"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              label="Customer Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter the customer's phone",
                },
              ]}
            >
              <Input
                placeholder="Customer Phone"
                className="border border-gray-400"
                size="large"
                prefix={<PhoneOutlined />}
              />
            </Form.Item>
            <Form.Item
              label="Customer Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please enter the customer's address",
                },
              ]}
            >
              <TextArea
                placeholder="Customer Address"
                className="border border-gray-400"
                autoSize={{ minRows: 2, maxRows: 6 }}
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

export default CustomerCreate;
