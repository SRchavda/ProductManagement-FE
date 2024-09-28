import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStock,
  getAllStock,
  updateStock,
} from "../../reducers/Stock/stockAction";

const StockForm = ({
  setIsOpen,
  data = { name: "", quantity: 0 },
  isUpdate,
}) => {
  const [stockData, setStockData] = useState(data);
  const { stockError } = useSelector((state) => state.StockReducer);

  const dispatch = useDispatch();

  console.log(stockError);

  const handleAddEditStock = () => {
    let newStock = stockData;
    if (!isUpdate) {
      const { name, quantity } = stockData;
      newStock = { name, quantity };
    }
    isUpdate
      ? dispatch(
          updateStock(newStock, () => {
            setIsOpen(false);
            dispatch(getAllStock());
          })
        )
      : dispatch(
          addStock(newStock, () => {
            setIsOpen(false);
            dispatch(getAllStock());
          })
        );
  };

  return (
    <div>
      <div>
        <label htmlFor="stockName">Stock Name</label>
        <input
          type="text"
          name="stockName"
          id="stockName"
          value={stockData.name}
          onChange={(e) => setStockData({ ...stockData, name: e.target.value })}
        />
      </div>
      <div>
        <label>Stock Quantity</label>
        <input
          type="number"
          name="stockQuantity"
          id="stockQuantity"
          value={stockData.quantity}
          onChange={(e) =>
            setStockData({ ...stockData, quantity: e.target.value })
          }
        />
      </div>
      <button onClick={() => handleAddEditStock()}>
        {isUpdate ? "Edit" : "Add"} Stock
      </button>

      {stockError && <p>{stockError}</p>}
    </div>
  );
};

export default StockForm;
