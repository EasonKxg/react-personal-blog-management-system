import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("pages/Login/index"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
