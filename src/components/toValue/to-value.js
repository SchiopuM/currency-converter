import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../redux/actions";
import "./to-value.css";

const ToValue = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { result, exchangeRates, toRate } = state;
  const { ChangeToRate, calculate } = actions;

  const select = exchangeRates.map((el) => (
    <option key={el.code} value={el.code}>
      {el.code}
    </option>
  ));

  return (
    <div className="input-group mb-3 to-value">
      <span className="input-group-text">
        <select
          className="form-select"
          value={toRate}
          onChange={(e) => {
            dispatch(ChangeToRate(e.target.value));
            dispatch(calculate());
          }}
        >
          {select}
        </select>
      </span>

      <input
        type="number"
        className="form-control"
        placeholder={isNaN(result) ? "0.00" : result.toFixed(2)}
        disabled
      />
    </div>
  );
};

export default ToValue;
