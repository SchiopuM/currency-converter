export const ChangefromRate = (rate) => ({ type: "from", payload: rate });
export const ChangeToRate = (rate) => ({ type: "to", payload: rate });

export const changeAmount = (amount) => {
  return { type: "amount", payload: amount };
};
export const swap = () => {
  return { type: "swap" };
};
export const calculate = () => ({ type: "calc" });
