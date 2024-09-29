import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getAllOrder } from "../../reducers/Order/orderAction";
import { getAllStock } from "../../reducers/Stock/stockAction";
import { toast } from "sonner";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const OrderForm = ({
  onClose,
  data = { cutomerName: "", stockId: "", orderQuantity: 0 },
}) => {
  const [orderData, setOrderData] = useState(data);
  const { stocks, getStockLoading, stockError } = useSelector(
    (state) => state.StockReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (stocks.length > 0) return;
    dispatch(getAllStock());
  }, []);

  const handleAddOrders = () => {
    let newOrder = orderData;
    dispatch(
      addOrder(newOrder, (error) => {
        if (error) {
          toast.error(error);
        } else {
          dispatch(getAllOrder());
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
          label="Customer Name"
          value={orderData.cutomerName}
          onChange={(e) =>
            setOrderData({ ...orderData, cutomerName: e.target.value })
          }
          sx={{ marginBottom: "20px" }}
        />
      </div>
      <div>
        {stockError ? (
          stockError
        ) : getStockLoading ? (
          "Loading.."
        ) : (
          <>
            {/* <select
            value={orderData.stockId}
            onChange={(e) =>
              setOrderData({ ...orderData, stockId: e.target.value })
            }
          >
            {stocks?.map((stock, index) => {
              return (
                <option key={stock.id} value={stock.id}>
                  {stock.name}
                </option>
              );
            })}
          </select> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={orderData.stockId}
              label="Stock"
              onChange={(e) =>
                setOrderData({ ...orderData, stockId: e.target.value })
              }
              sx={{ marginBottom: "20px", width: "120px" }}
            >
              {stocks?.map((stock, index) => {
                return (
                  <MenuItem key={stock.id} value={stock.id}>
                    {stock.name}
                  </MenuItem>
                );
              })}
            </Select>
          </>
        )}
      </div>
      <div>
        <TextField
          // error={`${stockError}`.includes("exist") && true}
          id="outlined-error"
          label="Order Quantity"
          value={orderData.orderQuantity}
          onChange={(e) =>
            setOrderData({ ...orderData, orderQuantity: e.target.value })
          }
          sx={{ marginBottom: "20px" }}
        />
      </div>
      <Button
        variant="outlined"
        onClick={() => handleAddOrders()}
        sx={{ mr: 2 }}
      >
        Add Order
      </Button>
      <Button variant="outlined" color="inherit" onClick={() => onClose()}>
        Cancel
      </Button>
    </div>
  );
};

export default OrderForm;
