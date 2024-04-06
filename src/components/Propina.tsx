import { Dispatch } from "react";
import { itemOrder } from "../types";
import { orderActions } from "../reducers/order-reducer";

type PropinaProps = {
  order: itemOrder[];
  dispatch: Dispatch<orderActions>;
};

const tipOptions = [
  {
    id: "tip-0",
    value: 0,
    label: "Sin Propina",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export const Propina = ({ dispatch }: PropinaProps) => {

  return (
    <>
      <div className="bg-white mt-5 rounded-lg p-4">
        <h2 className="text-2xl mb-3 font-bold">Propina</h2>
        <div>
          {tipOptions.map((item) => (
            <div className="flex gap-2" key={item.id}>
              <input
                type="radio"
                name="radio-propina"
                value={item.value}
                id={item.label}
                onChange={() =>
                  dispatch({
                    type: "setPropina",
                    payload: { propina: item.value },
                  })
                }
              />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
