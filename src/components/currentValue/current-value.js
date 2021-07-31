import React from "react";
import "./current-value.css";

const CurrentValue = ({
  rates,
  changeRate,
  fromRate,
  changeamount,
  amount,
}) => {
  const select = rates.map((el) => (
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
              onChange={changeRate}
            >
              {select}
            </select>
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="0.00"
            onChange={changeamount}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentValue;
