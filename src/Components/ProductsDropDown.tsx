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

    console.log("updatedProductsArray", updatedProductsArray);
    setSelectedProducts(updatedProductsArray);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "100%" }}
      placeholder="Please select"
      onChange={handleChange}
      // value={selecteProdcuts.map((product: any) => JSON.stringify(product))}
      // onChange={(value: string[]) => {
      //   const productsArray: any = value.map((item) => JSON.parse(item));
      //   console.log(productsArray);
      //   const qtyCheckArray = productsArray.map((p: any) => ({
      //     ...p,
      //     qty: p.qty ?? 1,
      //   }));
      //   console.log("qtyCheckarray", qtyCheckArray);
      //   setSelectedProducts(qtyCheckArray);
      // }}
      options={datas}
    />
  );
};

export default ProductsDropDown;
