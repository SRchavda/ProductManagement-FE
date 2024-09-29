import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteStock, getAllStock } from "../../reducers/Stock/stockAction";
import { toast } from "sonner";
import CustomTable from "../CustomeTable";
import CModal from "../CustomModal";
import StockForm from "./StockForm";

const headCells = [
  {
    id: "stockName",
    numeric: false,
    disablePadding: true,
    label: "Stock Name",
  },
  {
    id: "stockQty",
    numeric: true,
    disablePadding: false,
    label: "Stock Qty",
  },
  {
    id: "orderQty",
    numeric: true,
    disablePadding: false,
    label: "Order Qty",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

const rowSettings = [
  { isNest: false, prop: "name" },
  { isNest: false, prop: "quantity" },
  { isNest: false, prop: "orderQuantity" },
  { isButton: true },
];

export default function StocksTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ name: "", quantity: 0 });

  const { stocks, getStockLoading, stockError } = useSelector(
    (state) => state.StockReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStock());
  }, []);

  const handleEdit = (item) => {
    setModalData(item);
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(
      deleteStock(id, (error) => {
        if (error) {
          toast.error(error);
        } else {
          dispatch(getAllStock());
        }
      })
    );
  };

  return (
    <>
      {isOpen && (
        <CModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          btitle={"Edit Stock"}
        >
          <StockForm
            isUpdate={true}
            onClose={() => {
              setIsOpen(false);
            }}
            data={modalData}
          />
        </CModal>
      )}
      <Box sx={{ width: "100%" }}>
        <CustomTable
          headCells={headCells}
          rowSettings={rowSettings}
          data={stocks}
          isLoading={getStockLoading}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Box>
    </>
  );
}
