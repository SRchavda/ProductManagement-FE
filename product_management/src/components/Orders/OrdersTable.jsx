import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import { deleteOrder } from "../../reducers/Order/orderService";
import { getAllOrder } from "../../reducers/Order/orderAction";
import OrderForm from "./OrderForm";
import { toast } from "sonner";

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

  const handleEdit = (order) => {
    const { cutomerName, orderQuantity, id, stockId } = order;
    setModalData({ cutomerName, orderQuantity, id, stockId });
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(
      deleteOrder(id, (error) => {
        dispatch(getAllOrder());
        toast.error(error);
      })
    );
  };

  return (
    <>
      {getOrderLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h3>Orders Table</h3>
          <hr></hr>
        </div>
      )}
      <div>
        {isOpen && (
          <Modal>
            <OrderForm
              setIsOpen={(o) => setIsOpen(o)}
              data={modalData}
              isUpdate={true}
            />
          </Modal>
        )}
        {orders?.map((order, index) => {
          return (
            <div key={index}>
              <h2>{index}</h2>
              <div>Customer Name : {order.cutomerName}</div>
              <div>Stock : {order.stock.name}</div>
              <div>Order Quantity : {order.orderQuantity}</div>
              <button onClick={() => handleEdit(order)}>Edit</button>
              <button onClick={() => handleDelete(order.id)}>Delete</button>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrdersTable;
