import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../pages/home";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route index path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default ProtectedRoute;
