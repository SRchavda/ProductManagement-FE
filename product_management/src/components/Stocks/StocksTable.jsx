import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStock, getAllStock } from "../../reducers/Stock/stockAction";
import StockForm from "./StockForm";
import { toast } from "sonner";
import CModal from "../Modal";

export const StocksTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ name: "", quantity: 0 });

  const { stocks, getStockLoading, stockError } = useSelector(
    (state) => state.StockReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStock());
  }, []);

  const handleEdit = (id, name, quantity) => {
    setModalData({ name, quantity, id });
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(
      deleteStock(id, (error) => {
        dispatch(getAllStock());
        toast.error(error);
      })
    );
  };

  return (
    <>
      {getStockLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h3>Stocks Table</h3>
          <hr></hr>
        </div>
      )}
      <div>
        {isOpen && (
          <CModal onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <StockForm
              setIsOpen={(o) => setIsOpen(o)}
              data={modalData}
              isUpdate={true}
            />
          </CModal>
        )}
        {stocks?.map((stock, index) => {
          return (
            <div key={index}>
              <h2>{index}</h2>
              <div>Stock Name : {stock.name}</div>
              <div>Quantity : {stock.quantity}</div>
              <button
                onClick={() => handleEdit(stock.id, stock.name, stock.quantity)}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(stock.id)}>Delete</button>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </>
  );
};
