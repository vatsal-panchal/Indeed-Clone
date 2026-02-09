import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CompanyReviews from "../pages/CompanyReviews";
import SalaryGuide from "../pages/SalaryGuide";
import SignIn from "../pages/SignIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<CompanyReviews />} />
      <Route path="/salary" element={<SalaryGuide />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
