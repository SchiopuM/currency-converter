import React from "react";
import "./swap.css";

const Swap = ({ swap }) => {
  return (
    <div className="swap">
      <button className="btn btn-outline-secondary" onClick={swap}>
        Swap
      </button>
    </div>
  );
};

export default Swap;
