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

const initialState = {
  getOrderLoading: false,
  addOrderLoading: false,
  deleteOrderLoading: false,
  updateOrderLoading: false,
  orders: [],
  orderError: "",
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_REQUEST:
      return {
        ...state,
        getOrderLoading: true,
        orderError: "",
      };

    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        getOrderLoading: false,
        orders: action.payload,
        orderError: "",
      };

    case GET_ALL_ORDER_FAILURE:
      return {
        ...state,
        getOrderLoading: false,
        orders: [],
        orderError: action.payload,
      };

    case GET_ORDER_ID_REQUEST:
      return {
        ...state,
        getOrderLoading: true,
        orderError: "",
      };

    case GET_ORDER_ID_SUCCESS:
      return {
        ...state,
        getOrderLoading: false,
        orders: {
          ...action.payload,
        },
        orderError: "",
      };

    case GET_ORDER_ID_FAILURE:
      return {
        ...state,
        getOrderLoading: false,
        orders: [],
        orderError: action.payload,
      };

    case ADD_ORDER_REQUEST:
      return {
        ...state,
        addOrderLoading: true,
        orderError: "",
      };

    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        addOrderLoading: false,
        orderError: "",
      };

    case ADD_ORDER_FAILURE:
      return {
        ...state,
        addOrderLoading: false,
        orderError: action.payload,
      };

    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        deleteOrderLoading: true,
        orderError: "",
      };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        deleteOrderLoading: false,
        orders: action.payload,
        orderError: "",
      };

    case DELETE_ORDER_FAILURE:
      return {
        ...state,
        deleteOrderLoading: false,
        visitorChat: [],
        orderError: action.payload,
      };

    default:
      return state;
  }
};

export default OrderReducer;
