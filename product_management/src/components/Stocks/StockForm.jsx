import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStock,
  getAllStock,
  updateStock,
} from "../../reducers/Stock/stockAction";
import { toast } from "sonner";
import { Button, TextField } from "@mui/material";

const StockForm = ({ data = { name: "", quantity: 1 }, isUpdate, onClose }) => {
  const [stockData, setStockData] = useState(data);
  const { stockError } = useSelector((state) => state.StockReducer);

  const dispatch = useDispatch();

  const handleAddEditStock = () => {
    let newStock = stockData;
    if (!isUpdate) {
      const { name, quantity } = stockData;
      newStock = { name, quantity };
    }
    isUpdate
      ? dispatch(
          updateStock(newStock, (error) => {
            if (error) {
              toast.error(error);
            } else {
              dispatch(getAllStock());
              onClose();
            }
          })
        )
      : dispatch(
          addStock(newStock, (error) => {
            if (error) {
              toast.error(error);
            } else {
              dispatch(getAllStock());
              onClose();
            }
          })
        );
  };

  return (
    <div>
      <div>
        <TextField
          // error={`${stockError}`.includes("exist") && true}
          id="outlined-error"
          label="Stock Name"
          value={stockData.name}
          onChange={(e) => setStockData({ ...stockData, name: e.target.value })}
          sx={{ marginBottom: "20px" }}
        />
      </div>
      <div>
        <TextField
          // error={`${stockError}`.includes("negative") && true}
          id="outlined-error"
          label="Stock Quantity"
          value={stockData.quantity}
          onChange={(e) =>
            setStockData({ ...stockData, quantity: e.target.value })
          }
          sx={{ marginBottom: "20px" }}
        />
      </div>
      <Button
        variant="outlined"
        onClick={() => handleAddEditStock()}
        sx={{ mr: 2 }}
      >
        {isUpdate ? "Edit" : "Add"} Stock
      </Button>
      <Button variant="outlined" color="inherit" onClick={() => onClose()}>
        Cancel
      </Button>
    </div>
  );
};

export default StockForm;
