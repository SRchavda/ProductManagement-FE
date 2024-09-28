import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getAllOrder } from "../../reducers/Order/orderAction";
import { getAllStock } from "../../reducers/Stock/stockAction";

const OrderForm = ({
  setIsOpen,
  data = { cutomerName: "", stockId: "", orderQuantity: 0 },
}) => {
  const [OrderData, setOrderData] = useState(data);
  const { orderError } = useSelector((state) => state.OrderReducer);
  const { stocks, getStockLoading, stockError } = useSelector(
    (state) => state.StockReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (stocks.length > 0) return;
    dispatch(getAllStock());
  }, []);

  const handleAddOrders = () => {
    console.log(OrderData);
    let newOrder = OrderData;
    dispatch(
      addOrder(newOrder, () => {
        setIsOpen(false);
        dispatch(getAllOrder());
      })
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="cName">Customer Name</label>
        <input
          type="text"
          name="cutomerName"
          id="cutomerName"
          value={OrderData.cutomerName}
          onChange={(e) =>
            setOrderData({ ...OrderData, cutomerName: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="stockId">Stock</label>
        {stockError ? (
          stockError
        ) : getStockLoading ? (
          "Loading.."
        ) : (
          <select
            value={OrderData.stockId}
            onChange={(e) =>
              setOrderData({ ...OrderData, stockId: e.target.value })
            }
          >
            {stocks?.map((stock, index) => {
              return (
                <option key={stock.id} value={stock.id}>
                  {stock.name}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <div>
        <label htmlFor="orderQuantity">Order Quantity</label>
        <input
          type="number"
          name="orderQuantity"
          id="orderQuantity"
          value={OrderData.orderQuantity}
          onChange={(e) =>
            setOrderData({ ...OrderData, orderQuantity: e.target.value })
          }
        />
      </div>
      <button onClick={() => handleAddOrders()}>Add Order</button>
      <button type="submit">Submit</button>

      {orderError && <p>{orderError}</p>}
    </div>
  );
};

export default OrderForm;
