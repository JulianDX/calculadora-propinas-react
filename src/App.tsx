import { menuItems } from "./db/db";
import MenuItem from "./components/MenuItem";
import MenuConsumos from "./components/MenuConsumos";
import { Propina } from "./components/Propina";
import Total from "./components/Total";
import { formatCurrency } from "./helpers/formatCurrency";
import { initialState, orderReducer } from "./reducers/order-reducer";
import { useReducer } from "react";
import { useEffect } from "react";

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState);

  useEffect(() => {
    if (!state.order.length)
      dispatch({ type: "setPropina", payload: { propina: 0 } });
  }, [state.order]);

  return (
    <>
      <header className="bg-sky-700 py-3">
        <p className="text-center px-5 max-w-7xl mx-auto md:text-left text-white text-3xl font-bold">
          Calculadora de Propinas
        </p>
      </header>
      <main className="max-w-7xl mx-auto grid md:grid-cols-2 md:my-10 md:gap-10 p-2">
        <div className="p-3">
          <h2 className="font-extrabold text-2xl">Menú</h2>
          <div className="space-y-4 py-5">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
                formatCurrency={formatCurrency}
              />
            ))}
          </div>
        </div>
        <div className="border-dashed border-2 rounded-lg p-5 border-white bg-white bg-opacity-20">
          {state.order.length > 0 ? (
            <>
              <MenuConsumos
                order={state.order}
                formatCurrency={formatCurrency}
                dispatch={dispatch}
              />
              <Propina dispatch={dispatch} order={state.order} />
              <Total
                order={state.order}
                propina={state.propina}
                formatCurrency={formatCurrency}
              />
              <button
                className="w-full mt-5 bg-sky-700 hover:bg-sky-800 text-center text-white py-3 font-bold md:max-w-xs"
                onClick={() => dispatch({ type: "sendOrder" })}
              >
                Agregar Orden
              </button>
            </>
          ) : (
            <>
              <div className="text-center md:mt-4 font-semibold">
                Comienza Agregando Productos del Menú
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
