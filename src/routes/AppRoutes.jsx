import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const RouteProtection = () => {
  const isAuthenticated = localStorage.getItem("accessToken");
  return isAuthenticated ? null : <Navigate to="/auth/login" />;
};
// Default Layout
const Layout = () => {
  return (
    <>
      <RouteProtection />
      <DefaultLayout />
    </>
  );
};

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        {/* auth layout */}
        <Route path="auth/*" element={<PublicRoute />} />

        {/* Default Layout */}
        <Route path="*" element={<Layout />}>
          <Route path="*" element={<ProtectedRoute />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
