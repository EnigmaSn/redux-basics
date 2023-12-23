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

document.querySelector("#rnd").addEventListener("click", (e) => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch({ type: "RND", payload });
});

document.querySelector("#dec").addEventListener("click", (e) => {
  store.dispatch({ type: "DEC" });
});

document.querySelector("#inc").addEventListener("click", (e) => {
  store.dispatch({ type: "INC" });
});

const update = () => {
  document.querySelector("#counter").innerHTML = store.getState();
};

store.subscribe(update);
