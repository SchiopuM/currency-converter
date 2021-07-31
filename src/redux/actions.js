export const ChangefromRate = (rate) => ({
  type: "SET_FROM_RATE",
  payload: rate,
});
export const ChangeToRate = (rate) => ({ type: "SET_TO_RATE", payload: rate });

export const changeAmount = (amount) => {
  return { type: "SET_AMOUNT", payload: amount };
};
export const swap = () => {
  return { type: "SET_SWAP" };
};
export const calculate = () => ({ type: "SET_CALC" });
