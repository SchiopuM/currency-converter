import React from "react";
import CurrentValue from "../currentValue";
import Swap from "../swap";
import ToValue from "../toValue/";
import "./app.css";

export default class App extends React.Component {
  state = {
    exchangeRates: [
      {
        code: "USD",
        rate: 1,
      },
      {
        code: "EUR",
        rate: 0.8,
      },
      {
        code: "GBP",
        rate: 0.71,
      },
      {
        code: "MDL",
        rate: 0.05,
      },
    ],
    fromRate: "USD",
    toRate: "MDL",
    amount: 0,
    result: 0,
  };

  calculate = (fromRate, toRate, amount) => {
    this.setState((state) => {
      const from = state.exchangeRates.filter((el) => el.code === fromRate)[0]
        .rate;
      const to = state.exchangeRates.filter((el) => el.code === toRate)[0].rate;
      const result = (amount / from) * to;
      return {
        result: result,
      };
    });
  };

  changeRate = (typeRate, rate) => {
    switch (typeRate) {
      case "fromRate":
        return this.setState({
          fromRate: rate,
        });

      case "toRate":
        return this.setState({
          toRate: rate,
        });

      default:
        break;
    }
  };

  render() {
    const { exchangeRates, fromRate, toRate, amount, result } = this.state;

    const swap = () => {
      this.calculate(toRate, fromRate, amount);
      this.changeRate("fromRate", toRate);
      this.changeRate("toRate", fromRate);
    };

    return (
      <div className="wrap">
        <div className="app">
          <p class="text-muted fw-bold fs-3 text-center">Currency Converter</p>
          <div>
            <CurrentValue
              amount={amount}
              fromRate={fromRate}
              rates={exchangeRates}
              changeRate={(e) => {
                this.changeRate("fromRate", e.target.value);
                this.calculate(e.target.value, toRate, amount);
              }}
              changeamount={(e) => {
                this.setState({ amount: Number(e.target.value) });
                this.calculate(fromRate, toRate, e.target.value);
              }}
            />
            <Swap swap={swap} />
            <ToValue
              toRate={toRate}
              rates={exchangeRates}
              result={result}
              changeRate={(e) => {
                this.changeRate("toRate", e.target.value);
                this.calculate(fromRate, e.target.value, amount);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
