import {
  ADD_STOCK_FAILURE,
  ADD_STOCK_REQUEST,
  ADD_STOCK_SUCCESS,
  DELETE_STOCK_FAILURE,
  DELETE_STOCK_REQUEST,
  DELETE_STOCK_SUCCESS,
  GET_ALL_STOCK_FAILURE,
  GET_ALL_STOCK_REQUEST,
  GET_ALL_STOCK_SUCCESS,
  GET_STOCK_ID_FAILURE,
  GET_STOCK_ID_REQUEST,
  GET_STOCK_ID_SUCCESS,
  UPDATE_STOCK_FAILURE,
  UPDATE_STOCK_REQUEST,
  UPDATE_STOCK_SUCCESS,
} from "../actionTypes";
import {
  AddStock,
  DeleteStock,
  GetAllStock,
  GetStockByID,
  UpdateStock,
} from "./stockService";

export const fetchRequest = (type) => {
  return {
    type: type,
  };
};
export const fetchSuccess = (type, data) => {
  return {
    type: type,
    payload: data,
  };
};
export const fetchFailure = (type, error) => {
  return {
    type: type,
    payload: error,
  };
};

export const getAllStock = (callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(GET_ALL_STOCK_REQUEST));
    GetAllStock().then(
      (result) => {
        dispatch(fetchSuccess(GET_ALL_STOCK_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(GET_ALL_STOCK_FAILURE, error?.response?.data?.errorMsg)
        );
      }
    );
  };
};

export const getStockById = (id, callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(GET_STOCK_ID_REQUEST));
    GetStockByID(id).then(
      (result) => {
        dispatch(fetchSuccess(GET_STOCK_ID_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(GET_STOCK_ID_FAILURE, error?.response?.data?.errorMsg)
        );
      }
    );
  };
};

export const addStock = (newStock, callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(ADD_STOCK_REQUEST));
    AddStock(newStock).then(
      (result) => {
        dispatch(fetchSuccess(ADD_STOCK_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(ADD_STOCK_FAILURE, error?.response?.data?.errorMsg)
        );
      }
    );
  };
};

export const updateStock = (updatedStock, callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(UPDATE_STOCK_REQUEST));
    UpdateStock(updatedStock).then(
      (result) => {
        dispatch(fetchSuccess(UPDATE_STOCK_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(UPDATE_STOCK_FAILURE, error?.response?.data?.errorMsg)
        );
        callback && callback();
      }
    );
  };
};

export const deleteStock = (id, callback) => {
  return (dispatch) => {
    dispatch(fetchRequest(DELETE_STOCK_REQUEST));
    DeleteStock(id).then(
      (result) => {
        dispatch(fetchSuccess(DELETE_STOCK_SUCCESS, result));
        callback && callback();
      },
      (error) => {
        dispatch(
          fetchFailure(DELETE_STOCK_FAILURE, error?.response?.data?.errorMsg)
        );
        callback && callback(error?.response?.data?.errorMsg);
      }
    );
  };
};
