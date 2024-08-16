import React, { useState } from "react";
import { useStateContext } from "../contextProvider/ContextProvider";
import { Navigate } from "react-router-dom";

export default function Guestlayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }
  return <div>Guestlayout</div>;
}
