const initialState = {
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "from":
      return {
        ...state,
        fromRate: action.payload,
      };
    case "to":
      return {
        ...state,
        toRate: action.payload,
      };
    case "amount":
      return {
        ...state,
        amount: action.payload,
      };
    case "calc":
      const from = state.exchangeRates.filter(
        (el) => el.code === state.fromRate
      )[0].rate;

      const to = state.exchangeRates.filter((el) => el.code === state.toRate)[0]
        .rate;
      const result = (state.amount / from) * to;

      return {
        ...state,
        result: result,
      };

    case "swap":
      return {
        ...state,
        fromRate: state.toRate,
        toRate: state.fromRate,
      };
    default:
      return state;
  }
};

export default reducer;
