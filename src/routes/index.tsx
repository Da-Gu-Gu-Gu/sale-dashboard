import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path={paths.sale} element={<Sale />} />
          <Route path={paths.saleDetail} element={<SaleDetail />} />
          <Route path={paths.saleCreate} element={<CreateSale />} />

          <Route path={paths.customer} element={<Customer />} />
          <Route path={paths.customerCreate} element={<CustomerCreate />} />
          <Route path={paths.customerDetail} element={<CustomerDetail />} />
          <Route path={paths.product} element={<Products />} />
          <Route path={paths.channel} element={<SaleChannel />} />
          <Route path={paths.payment} element={<Payments />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
