import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";
import PostProduct from "../userAdmin/PostProduct";
import PutProduct from "../userAdmin/PutProduct";
import DeleteProduct from "../userAdmin/DeleteProduct";
import InfoSection from "../pages/InfoSection";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infosection" element={<InfoSection />} />
      <Route path="/post" element={<PostProduct />} />
      <Route path="/put" element={<PutProduct />} />
      <Route path="/delete" element={<DeleteProduct />} />
      {/* <Route path="cart" element={<Cart />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;