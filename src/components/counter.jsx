import React from "react";
import "./counter.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { counter: state };
};

function Counter({ counter, inc, dec, rnd }) {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <div className="btn-group">
        <button onClick={dec} id="dec" className="btn btn-danger btn-lg mr-1">
          DEC
        </button>
        <button onClick={inc} id="inc" className="btn btn-success btn-lg mr-1">
          INC
        </button>
        <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">
          RND
        </button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Counter);
