import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/User",
    element: <User />,
  },
]);

export default router;
