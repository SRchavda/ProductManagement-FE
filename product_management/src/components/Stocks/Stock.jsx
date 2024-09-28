import React, { useState } from "react";
import { StocksTable } from "./StocksTable";
import Modal from "../Modal";
import StockForm from "./StockForm";

const Stock = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div>
        <h4>Stocks</h4>
        {!isOpen && <button onClick={() => handleClick()}>Add Stock</button>}
      </div>
      {isOpen && (
        <Modal>
          <StockForm isUpdate={true} setIsOpen={() => setIsOpen} />
        </Modal>
      )}
      <div>
        <StocksTable />
      </div>
    </>
  );
};

export default Stock;
