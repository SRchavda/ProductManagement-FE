import axios from "axios";

export const GetAllStock = async () => {
  const res = await axios.get("https://localhost:7236/api/Stocks");
  return res.data;
};

export const GetStockByID = async (id) => {
  const res = await axios.get(`https://localhost:7236/api/Stocks/${id}`);
  return res.data;
};

export const AddStock = async (newStock) => {
  const res = await axios.post(`https://localhost:7236/api/Stocks`, newStock);
  return res.data;
};

export const UpdateStock = async (updatedStock) => {
  const res = await axios.put(
    `https://localhost:7236/api/Stocks`,
    updatedStock
  );
  return res.data;
};

export const DeleteStock = async (id) => {
  const res = await axios.delete(`https://localhost:7236/api/Stocks/${id}`);
  return res.data;
};
