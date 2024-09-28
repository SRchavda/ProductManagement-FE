import {
  applyMiddleware,
  combineReducers,
  configureStore,
  legacy_createStore,
} from "@reduxjs/toolkit";
//import stockReducer from "./features/stocks/stockSlice";
//import orderReducer from "./features/orders/orderSlice";
import { thunk } from "redux-thunk";
import StockReducer from "./reducers/Stock/stockReducer";
import OrderReducer from "./reducers/Order/orderReducer";

// import { configureStore } from "@reduxjs/toolkit";
// import { api } from "./services/api";

// export default configureStore({
//   reducer: {
//     stock: stockReducer,
//     order: orderReducer,
//   },
// });

const store = legacy_createStore(
  combineReducers({
    StockReducer,
    OrderReducer,
  }),
  applyMiddleware(thunk)
);

export default store;

// export const createStore = (options) =>
//   configureStore({
//     reducer: {
//       [api.reducerPath]: api.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(api.middleware),
//     ...options,
//   });

// export const store = createStore();
