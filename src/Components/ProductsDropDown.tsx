import { Select } from "antd";
import useProducts from "../api/useProducts";
import { useEffect } from "react";

const ProductsDropDown = ({ setSelectedProducts }: any) => {
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
        const productsArray: any = value.map((item) => JSON.parse(item));
        setSelectedProducts(productsArray);
      }}
      options={datas}
    />
  );
};

export default ProductsDropDown;
