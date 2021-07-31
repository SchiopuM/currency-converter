import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import "./swap.css";

const Swap = () => {
  const dispatch = useDispatch();

  const { swap, calculate } = actions;

  return (
    <div className="swap">
      <button
        className="btn btn-outline-secondary"
        onClick={() => {
          dispatch(swap());
          dispatch(calculate());
        }}
      >
        Swap
      </button>
    </div>
  );
};

export default Swap;
