import { Avatar, Button, Form, Input, notification } from "antd";
import BackButton from "../../Components/BackButton";
import {
  EditOutlined,
  SendOutlined,
  TruckOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDeliveryDetail, useUpdateDelivery } from "../../api/useDeliver";

const DeliverDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { loading, delivery, getDelivery } = useDeliveryDetail();
  const { loading: updateLoading, updateDelivery } = useUpdateDelivery();

  const { id } = useParams();
  const [form] = Form.useForm();

  useEffect(() => {
    getDelivery(id);
  }, [id, loading, updateLoading]);

  useEffect(() => {
    if (delivery) {
      form.setFieldsValue({
        name: delivery.deliver_name,
      });
    }
  }, [delivery, form]);

  const updateHandler = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        deliver_name: values.name,
      };
      await updateDelivery(id, payload);
      notification.success({
        message: "Delivery Updated",
        description: "The Delivery details have been successfully updated.",
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
          <Avatar className="bg-blue-400" size={64} icon={<TruckOutlined />} />
          <Form
            form={form}
            className="w-full"
            initialValues={{}}
            layout="vertical"
          >
            <Form.Item
              label="Delivery Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the Delivery's name" },
              ]}
            >
              <Input
                placeholder="Delivery Name"
                className=" text-black  custom-disabled-input"
                size="large"
                style={{ backgroundColor: "white", color: "black" }}
                disabled={!isEdit}
                variant={isEdit ? "outlined" : "borderless"}
                prefix={<UserOutlined />}
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

export default DeliverDetail;
