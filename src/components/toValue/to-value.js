import React from "react";
import "./to-value.css";
const ToValue = ({ result, rates, toRate, changeRate }) => {
  const select = rates.map((el) => (
    <option key={el.code} value={el.code}>
      {el.code}
    </option>
  ));

  return (
    <div className="input-group mb-3 to-value">
      <span className="input-group-text">
        <select className="form-select" value={toRate} onChange={changeRate}>
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
