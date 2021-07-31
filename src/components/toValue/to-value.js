import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";
import "./to-value.css";

const ToValue = ({ state, ChangeToRate, calculate }) => {
  const { result, exchangeRates, toRate } = state;

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
            ChangeToRate(e.target.value);
            calculate();
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

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => {
  const { ChangeToRate, calculate } = bindActionCreators(actions, dispatch);
  return { ChangeToRate, calculate };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToValue);
