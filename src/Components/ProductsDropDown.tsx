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

  const handleChange = (value: string[]) => {
    const productsArray: any = value.map((item) => JSON.parse(item));

    // Retain qty for existing products
    const updatedProductsArray = productsArray.map((p: any) => {
      const existingProduct = selecteProdcuts.find((sp: any) => sp.id === p.id);
      return {
        ...p,
        qty: existingProduct ? existingProduct.qty : 1,
      };
    });

    setSelectedProducts(updatedProductsArray);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="Please select"
      onChange={handleChange}
      options={datas}
    />
  );
};

export default ProductsDropDown;
