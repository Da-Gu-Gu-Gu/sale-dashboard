import { Route, Routes, useNavigate } from "react-router-dom";

import { paths } from "./data";
import DashboardLayout from "../Layout/DashboardLayout";
import Sale from "../Pages/Sale";
import Customer from "../Pages/Customer";
import Products from "../Pages/Product";
import SaleChannel from "../Pages/Channel";
import Payments from "../Pages/Payment";
import SaleDetail from "../Pages/Sale/SaleDetail";
import CreateSale from "../Pages/Sale/SaleCreate";
import CustomerCreate from "../Pages/Customer/CustomerCreate";
import CustomerDetail from "../Pages/Customer/CustomerDetail";
import ProductCreate from "../Pages/Product/ProductCreate";
import ProductDetail from "../Pages/Product/ProductDetail";
import ChannelCreate from "../Pages/Channel/ChannelCreate";
import ChannelDetail from "../Pages/Channel/ChannelDetail";
import PaymentCreate from "../Pages/Payment/PaymentCreate";
import PaymentDetail from "../Pages/Payment/PaymentDetail";
import LoginPage from "../Pages/Login";
import { useEffect, useState } from "react";

const AppRouter = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = !!localStorage.getItem("Email");
    setIsAuth(checkAuth);
    if (!checkAuth) {
      navigate(paths.login);
    }
  }, [navigate]);
  return (
    <Routes>
      {!isAuth ? (
        <>
          <Route path={paths.login} element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<DashboardLayout />}>
            <Route path={paths.sale} element={<Sale />} />
            <Route path={paths.saleDetail} element={<SaleDetail />} />
            <Route path={paths.saleCreate} element={<CreateSale />} />

            <Route path={paths.customer} element={<Customer />} />
            <Route path={paths.customerCreate} element={<CustomerCreate />} />
            <Route path={paths.customerDetail} element={<CustomerDetail />} />

            <Route path={paths.product} element={<Products />} />
            <Route path={paths.productCreate} element={<ProductCreate />} />
            <Route path={paths.productDetail} element={<ProductDetail />} />

            <Route path={paths.channel} element={<SaleChannel />} />
            <Route path={paths.channelCreate} element={<ChannelCreate />} />
            <Route path={paths.channelDetail} element={<ChannelDetail />} />

            <Route path={paths.payment} element={<Payments />} />
            <Route path={paths.paymentCreate} element={<PaymentCreate />} />
            <Route path={paths.paymentDetial} element={<PaymentDetail />} />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
