// src/Routers/Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Components/Home/Home"; 
import { Navbar } from "../Components/Navbar/Navbar";
import { ProductPage } from "../Components/ProductPage/ProductPage";
import { Footer } from "../Components/Footer/Footer";
import { SignInSide } from "../Components/sign-in/Login";
import { SignUpSide } from "../Components/sign-up/SignUp";
import Forgotpass from "../Components/sign-in/Forgotpass";
import { PaymentPage } from "../Components/Payment/PaymentPage";
import { CardPayment } from "../Components/Payment/CardPayment";
import { ProductDetails } from "../Components/ProductDetails/ProductDetails";
import { OrderPlaced } from "../Components/OrderDone/OrderDone";
import { UpiPayment } from "../Components/Payment/UpiPayment";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* 🔹 Main cake listing page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/cake/:id" element={<ProductDetails />} />

        {/* <Route path="/" element={<ProductPage />} />
        <Route path="/cakes" element={<ProductPage />} />
        <Route path="/product-page" element={<ProductPage />} /> */}

        {/* 🔹 Single cake details */}
        <Route path="/cake/:id" element={<ProductDetails />} />

        {/* 🔹 Auth routes */}
        <Route path="/signup" element={<SignUpSide />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/forgotpass" element={<Forgotpass />} />

        {/* 🔹 Payment flow */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/card-payment" element={<CardPayment />} />
        <Route path="/upi-payment" element={<UpiPayment />} />

        {/* 🔹 Order done */}
        <Route path="/orderdone" element={<OrderPlaced />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
