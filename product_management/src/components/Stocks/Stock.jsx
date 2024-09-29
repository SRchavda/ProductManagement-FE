import React, { useState } from "react";
import StockForm from "./StockForm";
import StocksTable from "./StocksTable";
import { Box, Button, Typography } from "@mui/material";
import CModal from "../CustomModal";

const Stock = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <Box>
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
        <Typography fontSize={30}>Stocks</Typography>
        {!isOpen && (
          <Button variant="outlined" onClick={() => handleClick()}>
            Add Stock
          </Button>
        )}
      </Box>
      {isOpen && (
        <CModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          btitle={"Add New Stock"}
        >
          <StockForm isUpdate={false} onClose={() => setIsOpen(false)} />
        </CModal>
      )}
      <div>
        <StocksTable />
      </div>
    </Box>
  );
};

export default Stock;
