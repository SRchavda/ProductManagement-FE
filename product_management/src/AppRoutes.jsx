import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Stock from "./components/Stocks/Stock";
import Order from "./components/Orders/Order";
import SideBar from "./components/SideBar";
import { Box } from "@mui/material";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: "stocks",
          element: <Stock />,
        },
        {
          path: "orders",
          element: <Order />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const MainLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <SideBar />
      <Box sx={{ width: "100%" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppRoutes;
