import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

import "./current-value.css";

const CurrentValue = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { amount, fromRate, exchangeRates } = state;
  const { calculate, changeAmount, ChangefromRate } = actions;

  const select = exchangeRates.map((el) => (
    <option key={el.code} value={el.code}>
      {el.code}
    </option>
  ));

  let alert = isNaN(amount) ? (
    <div className="alert alert-danger alert">Input must be a number!</div>
  ) : null;

  return (
    <div className="input-group mb-3 current-value">
      <div>
        {alert}
        <div className="input-group ">
          <span className="input-group-text">
            <select
              className="form-select"
              value={fromRate}
              onChange={(e) => {
                dispatch(ChangefromRate(e.target.value));
                dispatch(calculate());
              }}
            >
              {select}
            </select>
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="0.00"
            onChange={(e) => {
              dispatch(changeAmount(Number(e.target.value)));
              dispatch(calculate());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentValue;
