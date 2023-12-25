import { bindActionCreators } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import * as actions from "./actions";

const store = configureStore({ reducer: reducer });
const { dispatch } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.querySelector("#rnd").addEventListener("click", () => {
  const payload = Math.floor(Math.random() * 10);
  rnd(payload);
});

document.querySelector("#dec").addEventListener("click", dec);

document.querySelector("#inc").addEventListener("click", inc);

const update = () => {
  document.querySelector("#counter").innerHTML = store.getState();
};

store.subscribe(update);
