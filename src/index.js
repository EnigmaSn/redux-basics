import React from "react";
import { createRoot } from "react-dom/client";
import { bindActionCreators } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import Counter from "./components/counter";
import { reducer } from "./reducer";
import * as actions from "./actions";

const store = configureStore({ reducer: reducer });
const { dispatch } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
const root = createRoot(document.getElementById("root"));

const update = () => {
  root.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const payload = Math.floor(Math.random() * 10);
        rnd(payload);
      }}
    />
  );
};
update();
store.subscribe(update);
