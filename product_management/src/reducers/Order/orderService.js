import axios from "axios";

export const GetAllOrder = async () => {
  const res = await axios.get("https://localhost:7236/api/Orders");
  return res.data;
};

export const GetOrderByID = async (id) => {
  const res = await axios.get(`https://localhost:7236/api/Orders/${id}`);
  return res.data;
};

export const AddOrder = async (newOrder) => {
  const res = await axios.post(`https://localhost:7236/api/Orders`, newOrder);
  return res.data;
};

export const deleteOrder = async (id) => {
  const res = await axios.delete(`https://localhost:7236/api/Orders/${id}`);
  return res.data;
};
