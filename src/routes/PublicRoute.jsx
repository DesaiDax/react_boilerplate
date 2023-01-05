import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyOTP from "../pages/auth/VerifyOTP";

const PublicRoute = () => {
  return (
    <Routes>
      <Route index path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyOTP />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/create-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default PublicRoute;
