import React, { useState } from "react";
import Modal from "../Modal";
import OrdersTable from "./OrdersTable";
import OrderForm from "./OrderForm";

const Order = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div>
        <h4>Orders</h4>
        {!isOpen && <button onClick={() => handleClick()}>Add Order</button>}
      </div>
      {isOpen && (
        <Modal>
          <OrderForm isUpdate={false} setIsOpen={() => setIsOpen} />
        </Modal>
      )}
      <div>
        <OrdersTable />
      </div>
    </>
  );
};

export default Order;
