import { Avatar, Button, Form, Input, notification } from "antd";
import BackButton from "../../Components/BackButton";
import {
  CodeOutlined,
  MoneyCollectOutlined,
  ProductOutlined,
  SendOutlined,
  StarOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useCreateProduct } from "../../api/useProducts";

const ProductCreate = () => {
  const [form] = Form.useForm();
  const [formError, setFormError] = useState<string | null>(null);
  const { loading, createProduct } = useCreateProduct();

  const createHandler = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);

      const payload = {
        product_name: values.name,
        product_code: values.code,
        product_price: Number(values.price),
        product_stock: Number(values.stock),
        product_available: true,
      };

      await createProduct(payload);

      notification.success({
        message: "Product Created",
        description: "The Product has been successfully created.",
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
        <div className="flex justify-center">
          <div className="w-1/2 bg-white p-6 rounded-lg flex flex-col items-center px-10 gap-5">
            <h1 className="text-left w-full flex items-center flex-col gap-3 text-xl">
              <Avatar
                size={"large"}
                icon={<StarOutlined />}
                className="bg-blue-400"
              />
              Product Create Form
            </h1>
            <Form
              form={form}
              className="w-full"
              initialValues={{}}
              layout="vertical"
            >
              <Form.Item
                label="Product Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter the product's name",
                  },
                ]}
              >
                <Input
                  placeholder="Product Name"
                  className="border border-gray-400"
                  size="large"
                  prefix={<ProductOutlined />}
                />
              </Form.Item>
              <Form.Item
                label="Product Code"
                name="code"
                rules={[
                  {
                    required: true,
                    message: "Please enter the product's code",
                  },
                ]}
              >
                <Input
                  placeholder="Product Code"
                  className="border border-gray-400"
                  size="large"
                  prefix={<CodeOutlined />}
                />
              </Form.Item>

              <Form.Item
                label="Product Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please enter the product's Price",
                  },
                ]}
              >
                <Input
                  placeholder="Product Price"
                  className="border border-gray-400"
                  size="large"
                  prefix={<MoneyCollectOutlined />}
                />
              </Form.Item>

              <Form.Item
                label="Product Stock"
                name="stock"
                rules={[
                  {
                    required: true,
                    message: "Please enter the product's Stock",
                  },
                ]}
              >
                <Input
                  placeholder="Product Stock"
                  className="border border-gray-400"
                  size="large"
                  prefix={<StockOutlined />}
                />
              </Form.Item>

              {formError && (
                <div className="text-red-500 mb-4">{formError}</div>
              )}
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
    </div>
  );
};

export default ProductCreate;
