import { Avatar, Button, Form, Input, notification } from "antd";
import BackButton from "../../Components/BackButton";

import {
  CodeOutlined,
  EditOutlined,
  MoneyCollectOutlined,
  ProductOutlined,
  SendOutlined,
  StarOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductDetail, useUpdateProduct } from "../../api/useProducts";

const ProductDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const [form] = Form.useForm();
  const { loading, getProduct, product } = useProductDetail();
  const { loading: upateLoading, updateProduct } = useUpdateProduct();
  useEffect(() => {
    getProduct(id);
  }, [id, loading, upateLoading]);

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        name: product.product_name,
        code: product.product_code,
        price: product.product_price,
        stock: product.product_stock,
      });
    }
  }, [product, form]);

  const updateHandler = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        product_name: values.name,
        product_code: values.code,
        product_price: Number(values.price),
        product_stock: Number(values.stock),
        product_available: true,
      };
      await updateProduct(id, payload);
      notification.success({
        message: "Product Updated",
        description: "The Product details have been successfully updated.",
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
        <div className="flex justify-center">
          <div className="w-1/2 bg-white p-6 rounded-lg flex flex-col items-center px-10 gap-5">
            <h1 className="text-left w-full flex items-center flex-col gap-3 text-xl">
              <Avatar
                size={"large"}
                icon={<StarOutlined />}
                className="bg-blue-400"
              />
              Product Information
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
                  style={{ backgroundColor: "white", color: "black" }}
                  disabled={!isEdit}
                  variant={isEdit ? "outlined" : "borderless"}
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
                  style={{ backgroundColor: "white", color: "black" }}
                  disabled={!isEdit}
                  variant={isEdit ? "outlined" : "borderless"}
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
                  style={{ backgroundColor: "white", color: "black" }}
                  disabled={!isEdit}
                  variant={isEdit ? "outlined" : "borderless"}
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
                  style={{ backgroundColor: "white", color: "black" }}
                  disabled={!isEdit}
                  variant={isEdit ? "outlined" : "borderless"}
                  prefix={<StockOutlined />}
                />
              </Form.Item>

              {/* {formError && (
            <div className="text-red-500 mb-4">{formError}</div>
          )} */}
              <Button
                type="primary"
                size="large"
                className={`w-full ${isEdit && "bg-green-500"}`}
                onClick={isEdit ? updateHandler : () => setIsEdit(true)}
                icon={isEdit ? <SendOutlined /> : <EditOutlined />}
              >
                {isEdit ? "Update" : "Edit"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
