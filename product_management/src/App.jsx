import { Provider } from "react-redux";
import "./App.css";
import AppRoutes from "./AppRoutes";
// import { configureStore } from "@reduxjs/toolkit";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
