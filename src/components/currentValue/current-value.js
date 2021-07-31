import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

import "./current-value.css";

const CurrentValue = ({ state, ChangefromRate, changeAmount, calculate }) => {
  const { amount, fromRate, exchangeRates } = state;

  const select = exchangeRates.map((el) => (
    <option key={el.code} value={el.code}>
      {el.code}
    </option>
  ));

  let alert = (
    <div className="alert alert-danger alert">Input must be a number!</div>
  );

  if (!isNaN(amount)) {
    alert = null;
  }

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
                ChangefromRate(e.target.value);
                calculate();
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
              changeAmount(Number(e.target.value));
              calculate();
            }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => {
  const { changeAmount, ChangefromRate, calculate } = bindActionCreators(
    actions,
    dispatch
  );

  return {
    changeAmount,
    ChangefromRate,
    calculate,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentValue);
