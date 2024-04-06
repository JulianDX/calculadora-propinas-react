import { formatCurrency } from "../helpers/formatCurrency";
import { itemOrder } from "../types";
import { Dispatch } from "react";
import { orderActions } from "../reducers/order-reducer";

type MenuConsumosProps = {
  order: itemOrder[];
  formatCurrency: (amount: number) => string;
  dispatch: Dispatch<orderActions>;
};

const MenuConsumos = ({ order, dispatch }: MenuConsumosProps) => {
  return (
    <div className="bg-white p-4 rounded-lg space-y-2">
      <h2 className="font-extrabold text-2xl mb-5">Consumo</h2>
      {order.map((item, index) => {
        return (
          <div
            className="flex justify-between items-center border-b-2 py-5 first-of-type:border-t-2"
            key={index}
          >
            <div>
              <p className="font-bold">
                Producto: <span className="font-normal">{item.name}</span>
              </p>
              <p className="font-bold">
                Precio:{" "}
                <span className="font-normal">
                  {formatCurrency(item.price)}
                </span>
              </p>
              <p className="font-bold">
                Cantidad: <span className="font-normal">{item.quantity}</span>
              </p>
            </div>
            <div>
              <button
                className="font-black text-white bg-red-700 hover:bg-red-600 p-2 w-10 rounded-full inline-flex justify-center"
                onClick={() =>
                  dispatch({ type: "deleteItem", payload: { id: item.id } })
                }
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuConsumos;
