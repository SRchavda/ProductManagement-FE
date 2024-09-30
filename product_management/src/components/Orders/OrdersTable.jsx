import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrderById, getAllOrder } from "../../reducers/Order/orderAction";
import { Box } from "@mui/material";
import CustomTable from "../CustomeTable";
import CModal from "../CustomModal";
import OrderForm from "../Orders/OrderForm";
import { deleteOrder } from "../../reducers/Order/orderService";
import { toast } from "sonner";

const headCells = [
  {
    id: "customerName",
    numeric: false,
    disablePadding: true,
    label: "Customer Name",
  },
  {
    id: "stockId",
    numeric: true,
    disablePadding: false,
    label: "Stock Name",
  },
  {
    id: "orderQuantity",
    numeric: true,
    disablePadding: false,
    label: "Order Qty",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

const rowSettings = [
  { isNest: false, prop: "cutomerName" },
  { isNest: true, per: "stock", prop: "name" },
  { isNest: false, prop: "orderQuantity" },
  { isButton: true },
];

const OrdersTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    cutomerName: "",
    stockId: "",
    orderQuantity: 0,
  });

  const { orders, getOrderLoading } = useSelector(
    (state) => state.OrderReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrder());
  }, []);

  // const handleDelete = (order) => {
  //   const { cutomerName, orderQuantity, id, stockId } = order;
  //   setModalData({ cutomerName, orderQuantity, id, stockId });
  //   setIsOpen(true);
  // };

  const handleDelete = (id) => {
    dispatch(
      deleteOrderById(id, (error) => {
        if (error) {
          toast.error(error);
        } else {
          dispatch(getAllOrder());
        }
      })
    );
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <CustomTable
          headCells={headCells}
          data={orders}
          rowSettings={rowSettings}
          isLoading={getOrderLoading}
          handleDelete={handleDelete}
        />
      </Box>
    </>
  );
};

export default OrdersTable;
