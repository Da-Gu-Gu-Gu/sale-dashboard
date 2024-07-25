import {
  EditOutlined,
  PhoneOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, Form, notification } from "antd";
import { useEffect, useState } from "react";
import "../../index.css";
import { useCustomerDetail, useUpdateCustomer } from "../../api/useCustomer";
import { useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";

const { TextArea } = Input;

const CustomerDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { loading, customer, getCustomer } = useCustomerDetail();
  const { loading: updateLoading, updateCustomer } = useUpdateCustomer();
  const { id } = useParams();
  const [form] = Form.useForm();

  useEffect(() => {
    getCustomer(id);
  }, [id, loading, updateLoading]);

  useEffect(() => {
    if (customer) {
      form.setFieldsValue({
        name: customer.customer_name,
        phone: customer.customer_phone,
        address: customer.customer_address,
      });
    }
  }, [customer, form]);

  const updateHandler = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        customer_name: values.name,
        customer_phone: values.phone,
        customer_address: values.address,
      };
      await updateCustomer(id, payload);
      notification.success({
        message: "Customer Updated",
        description: "The customer details have been successfully updated.",
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
          <Avatar className="bg-blue-400" size={64} icon={<UserOutlined />} />
          <Form
            form={form}
            className="w-full"
            initialValues={{}}
            layout="vertical"
          >
            <Form.Item
              label="Customer Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the customer's name" },
              ]}
            >
              <Input
                placeholder="Customer Name"
                className=" text-black  custom-disabled-input"
                size="large"
                style={{ backgroundColor: "white", color: "black" }}
                disabled={!isEdit}
                variant={isEdit ? "outlined" : "borderless"}
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
                className=" text-black  custom-disabled-input"
                size="large"
                disabled={!isEdit}
                style={{ backgroundColor: "white", color: "black" }}
                variant={isEdit ? "outlined" : "borderless"}
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
                className=" text-black  custom-disabled-input"
                size="large"
                style={{ backgroundColor: "white", color: "black" }}
                variant={isEdit ? "outlined" : "borderless"}
                disabled={!isEdit}
                autoSize={{ minRows: 2, maxRows: 6 }}
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

export default CustomerDetail;
