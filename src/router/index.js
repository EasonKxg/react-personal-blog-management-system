import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("pages/Login/index"));
const Layout = lazy(() => import("layout/index"));
const Home = lazy(() => import("pages/Home/Home"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Layout",
    element: <Layout />,
  },
];

export default routes;
