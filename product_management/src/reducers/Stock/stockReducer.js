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

const initialState = {
  getStockLoading: false,
  addStockLoading: false,
  deleteStockLoading: false,
  updateStockLoading: false,
  stocks: [],
  stockError: "",
};

const StockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STOCK_REQUEST:
      return {
        ...state,
        getStockLoading: true,
        stockError: "",
      };

    case GET_ALL_STOCK_SUCCESS:
      return {
        ...state,
        getStockLoading: false,
        stocks: action.payload,
        stockError: "",
      };

    case GET_ALL_STOCK_FAILURE:
      return {
        ...state,
        getStockLoading: false,
        stocks: [],
        stockError: action.payload,
      };

    case GET_STOCK_ID_REQUEST:
      return {
        ...state,
        getStockLoading: true,
        stockError: "",
      };

    case GET_STOCK_ID_SUCCESS:
      return {
        ...state,
        getStockLoading: false,
        stocks: {
          ...action.payload,
        },
        stockError: "",
      };

    case GET_STOCK_ID_FAILURE:
      return {
        ...state,
        getStockLoading: false,
        stocks: [],
        stockError: action.payload,
      };

    case ADD_STOCK_REQUEST:
      return {
        ...state,
        addStockLoading: true,
        stockError: "",
      };

    case ADD_STOCK_SUCCESS:
      return {
        ...state,
        addStockLoading: false,
        stockError: "",
      };

    case ADD_STOCK_FAILURE:
      return {
        ...state,
        addStockLoading: false,
        stockError: action.payload,
      };

    case UPDATE_STOCK_REQUEST:
      return {
        ...state,
        updateStockLoading: true,
        stockError: "",
      };

    case UPDATE_STOCK_SUCCESS:
      return {
        ...state,
        updateStockLoading: false,
        stockError: "",
      };

    case UPDATE_STOCK_FAILURE:
      return {
        ...state,
        updateStockLoading: false,
        stocks: [],
        visitorChatError: action.payload,
      };

    case DELETE_STOCK_REQUEST:
      return {
        ...state,
        deleteStockLoading: true,
        stockError: "",
      };

    case DELETE_STOCK_SUCCESS:
      return {
        ...state,
        deleteStockLoading: false,
        stockError: "",
      };

    case DELETE_STOCK_FAILURE:
      return {
        ...state,
        deleteStockLoading: false,
        visitorChat: [],
        stockError: action.payload,
      };

    default:
      return state;
  }
};

export default StockReducer;
