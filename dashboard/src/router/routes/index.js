import { Children } from "react";
import MainLayout from "../../layout/MainLayout";
import privateRoutes from "./privateRoutes";
import { Outlet } from "react-router-dom";

const getRoutes = () => {
  return {
    path: '/',
    element: <MainLayout />,
    children: privateRoutes,
  }
}

export default getRoutes