import { Select } from "antd";
import useProducts from "../api/useProducts";
import { useEffect } from "react";

const ProductsDropDown = ({ selecteProdcuts, setSelectedProducts }: any) => {
  const { products, getProdcutList } = useProducts();

  useEffect(() => {
    getProdcutList();
  }, []);

  const datas = products?.map((x: any) => {
    return {
      label: x?.product_name,
      value: JSON.stringify(x),
    };
  });
  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="Please select"
      onChange={(value: []) => {
        const newProductsArray = value.map((item) => {
          const parsedItem = JSON.parse(item);
          const existingProduct = selecteProdcuts.find(
            (p) => p.id === parsedItem.id
          );
          return existingProduct
            ? existingProduct
            : { ...parsedItem, qty: 1, productId: Number(parsedItem.id) };
        });

        setSelectedProducts(newProductsArray);
      }}
      options={datas}
    />
  );
};

export default ProductsDropDown;
