import { Avatar, Button, Form, Input, notification } from "antd";
import BackButton from "../../Components/BackButton";
import { SendOutlined, TruckOutlined, UserOutlined } from "@ant-design/icons";

import { useState } from "react";
import { useCreateDelivery } from "../../api/useDeliver";

const DeliveryCreate = () => {
  const { createDelivery, loading } = useCreateDelivery();
  const [form] = Form.useForm();
  const [formError, setFormError] = useState<string | null>(null);

  const createHandler = async () => {
    try {
      const values = await form.validateFields();

      const payload = {
        deliver_name: values.name,
      };

      await createDelivery(payload);

      notification.success({
        message: "Delivery Created",
        description: "The Delivery has been successfully created.",
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
              icon={<TruckOutlined />}
            />
            <Form.Item
              label="Delivery Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the Delivery's name" },
              ]}
            >
              <Input
                placeholder="Delivery Name"
                className="border border-gray-400"
                size="large"
                prefix={<UserOutlined />}
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

export default DeliveryCreate;
