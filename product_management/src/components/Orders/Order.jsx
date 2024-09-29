import React, { useState } from "react";
import OrdersTable from "./OrdersTable";
import OrderForm from "./OrderForm";
import CModal from "../CustomModal";
import { Box, Button, Typography } from "@mui/material";

const Order = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid black",
          padding: "10px 30px",
          height: "50px",
        }}
      >
        <Typography fontSize={30}>Orders</Typography>
        {!isOpen && (
          <Button variant="outlined" onClick={() => handleClick()}>
            Add Orders
          </Button>
        )}
      </Box>
      {isOpen && (
        <CModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          btitle={"Add New Order"}
        >
          <OrderForm isUpdate={false} onClose={() => setIsOpen(false)} />
        </CModal>
      )}
      <div>
        <OrdersTable />
      </div>
    </>
  );
};

export default Order;
