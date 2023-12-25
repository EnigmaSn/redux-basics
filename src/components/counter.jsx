import React from "react";
import "./counter.css";

export default function Counter({ counter, inc, dec, rnd }) {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <div className="btn-group">
        <button onClick={dec} id="dec" className="btn btn-danger btn-lg mr-10">
          DEC
        </button>
        <button onClick={inc} id="inc" className="btn btn-success btn-lg">
          INC
        </button>
        <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">
          RND
        </button>
      </div>
    </div>
  );
}
