import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contextProvider/ContextProvider.jsx";

export default function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/Login" />;
  }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">DashBoard</Link>
        <Link to="/user">User</Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>
          <div>User Info</div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
