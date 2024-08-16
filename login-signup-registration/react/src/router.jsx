import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/login";
import SignUp from "./views/SignUp";
import User from "./views/User";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import Guestlayout from "./components/Guestlayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/User" />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/User",
        element: <User />,
      },
    ],
  },
  {
    path: "/",
    element: <Guestlayout />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
