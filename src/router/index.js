import { lazy } from "react";
// import { Navigate } from "react-router-dom";

const Login = lazy(() => import("pages/Login/index"));
const Layout = lazy(() => import("layout/index"));
// const Home = lazy(() => import("pages/Home/Home"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));

const routes = [
  // {
  //   path: "/",
  //   element: <Navigate to={<Layout />} />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
