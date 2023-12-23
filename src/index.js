import { createStore } from "redux";
import { reducer } from "./reducer";
import { inc, dec, rnd } from "./actions";

const store = createStore(reducer);

document.querySelector("#rnd").addEventListener("click", (e) => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch(rnd(payload));
});

document.querySelector("#dec").addEventListener("click", (e) => {
  store.dispatch(dec());
});

document.querySelector("#inc").addEventListener("click", (e) => {
  store.dispatch(inc());
});

const update = () => {
  document.querySelector("#counter").innerHTML = store.getState();
};

store.subscribe(update);
