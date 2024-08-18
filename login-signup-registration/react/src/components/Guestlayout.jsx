import React, { useState } from "react";
import { useStateContext } from "../contextProvider/ContextProvider.jsx";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestLayout() {
  const { user, token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div id="guestLayout">
      <Outlet />
    </div>
  );
}
