import { formatCurrency } from "../helpers/formatCurrency";
import { item as itemT } from "../types";
import { Dispatch } from "react";
import { orderActions } from "../reducers/order-reducer";

type itemProp = {
  item: itemT;
  dispatch: Dispatch<orderActions>;
  formatCurrency: (amount: number) => string;
};

const MenuItem = ({ item, dispatch }: itemProp) => {
  return (
    <button
      className="border-2 border-sky-600 hover:bg-sky-100 w-full flex p-3 justify-between rounded-lg bg-white"
      onClick={() => dispatch({ type: "addItem", payload: { item } })}
    >
      <h2 className="font-semibold text-left">{item.name}</h2>
      <p className="font-bold">{formatCurrency(item.price)}</p>
    </button>
  );
};

export default MenuItem;
