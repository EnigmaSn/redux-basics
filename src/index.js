import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RND":
      return state + action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);
const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const rnd = (payload) => ({ type: "RND", payload });

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
