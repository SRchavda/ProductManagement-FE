import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Stock from "./components/Stocks/Stock";
import Order from "./components/Orders/Order";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent />,
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

const LayoutComponent = () => {
  return (
    <div>
      <div>
        <h1>Stock Management</h1>
        <hr></hr>
        <div>
          <Link to={"stocks"}>Stocks</Link>
          <Link to={"orders"}>Orders</Link>
        </div>
        <hr></hr>
        <Outlet />
      </div>
    </div>
  );
};

export default AppRoutes;
