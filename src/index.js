import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import App from "./components/app";
import { Provider } from "react-redux";

const store = configureStore({ reducer: reducer });
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
