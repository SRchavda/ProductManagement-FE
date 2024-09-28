import {
  ADD_ORDER_FAILURE,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  GET_ALL_ORDER_FAILURE,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_ORDER_ID_FAILURE,
  GET_ORDER_ID_REQUEST,
  GET_ORDER_ID_SUCCESS,
} from "../actionTypes";
import { fetchFailure, fetchRequest, fetchSuccess } from "../Stock/stockAction";
import { AddOrder, GetAllOrder, GetOrderByID } from "./orderService";

export const getAllOrder = (callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(GET_ALL_ORDER_REQUEST));
    GetAllOrder().then(
      (result) => {
        dispatch(fetchSuccess(GET_ALL_ORDER_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(GET_ALL_ORDER_FAILURE, error?.response?.data?.errorMsg)
        );
      }
    );
  };
};

export const getOrderById = (id, callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(GET_ORDER_ID_REQUEST));
    GetOrderByID(id).then(
      (result) => {
        dispatch(fetchSuccess(GET_ORDER_ID_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(GET_ORDER_ID_FAILURE, error?.response?.data?.errorMsg)
        );
        callback && callback();
      }
    );
  };
};

export const addOrder = (newStock, callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(ADD_ORDER_REQUEST));
    AddOrder(newStock).then(
      (result) => {
        dispatch(fetchSuccess(ADD_ORDER_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(ADD_ORDER_FAILURE, error?.response?.data?.errorMsg)
        );
        callback && callback();
      }
    );
  };
};

export const deleteOrder = (id, callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(DELETE_ORDER_REQUEST));
    deleteOrder(id).then(
      (result) => {
        dispatch(fetchSuccess(DELETE_ORDER_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(DELETE_ORDER_FAILURE, error?.response?.data?.errorMsg)
        );
        callback && callback();
      }
    );
  };
};
