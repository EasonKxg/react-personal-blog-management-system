import { lazy } from "react";
// import { Navigate } from "react-router-dom";

const Login = lazy(() => import("pages/Login/index"));
const Layout = lazy(() => import("layout/index"));
const Account = lazy(() => import("pages/Account/Account"));
const Label = lazy(() => import("pages/Label/Label"));
const Article = lazy(() => import("pages/Article/Article"));
// const Home = lazy(() => import("pages/Home/Home"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));
// {
//   path: "/",
//   element: <Navigate to={<Layout />} />,
// },
const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "label",
        element: <Label />,
      },
      {
        path: "article",
        element: <Article />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
