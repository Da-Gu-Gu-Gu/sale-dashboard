import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sale from "../Pages/Sale";
import { paths } from "./data";
import DashboardLayout from "../Layout/DashboardLayout";
import Order from "../Pages/Order";
import Customer from "../Pages/Customer";
import Products from "../Pages/Product";
import SaleChannel from "../Pages/Channel";
import Payments from "../Pages/Payment";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path={paths.order} element={<Order />} />
          <Route path={paths.sale} element={<Sale />} />
          <Route path={paths.customer} element={<Customer />} />
          <Route path={paths.product} element={<Products />} />
          <Route path={paths.channel} element={<SaleChannel />} />
          <Route path={paths.payment} element={<Payments />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
