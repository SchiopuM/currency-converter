import React from "react";
import CurrentValue from "../currentValue";
import Swap from "../swap";
import ToValue from "../toValue/";
import "./app.css";

const App = () => {
  return (
    <div className="wrap">
      <div className="app">
        <p className="text-muted fw-bold fs-3 text-center">
          Currency Converter
        </p>
        <div>
          <CurrentValue />
          <Swap />
          <ToValue />
        </div>
      </div>
    </div>
  );
};
export default App;
