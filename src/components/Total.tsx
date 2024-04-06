import { useMemo } from "react";
import { itemOrder } from "../types";

type TotalProps = {
  order: itemOrder[];
  propina: number;
  formatCurrency: (amount: number) => string;
};

const Total = ({ order, propina, formatCurrency }: TotalProps) => {
  const subTotal = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  return (
    <div className="bg-white p-4 rounded-lg space-y-2 mt-5">
      <h2 className="text-2xl mb-3 font-bold">Cuenta</h2>
      <p className="font-bold">
        Subtotal:{" "}
        <span className="font-normal">{formatCurrency(subTotal)}</span>
      </p>
      <p className="font-bold">
        Propina:{" "}
        <span className="font-normal">
          {formatCurrency(subTotal * propina)}
        </span>
      </p>
      <p className="font-bold">
        Total:{" "}
        <span className="font-normal">
          {formatCurrency(subTotal + subTotal * propina)}
        </span>
      </p>
    </div>
  );
};

export default Total;
