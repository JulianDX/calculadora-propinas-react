import { item as itemT, orderStateType } from "../types";

export const initialState: orderStateType = {
  order: [],
  propina: 0,
};

export type orderActions =
  | { type: "addItem"; payload: { item: itemT } }
  | { type: "deleteItem"; payload: { id: itemT["id"] } }
  | { type: "setPropina"; payload: { propina: number } }
  | { type: "sendOrder" };

export const orderReducer = (
  state: typeof initialState,
  action: orderActions
) => {
  switch (action.type) {
    case "addItem":
      const itemEncontrado = state.order.find(
        (element) => element.id === action.payload.item.id
      );
      let order;
      let itemAgregado;
      if (itemEncontrado) {
        const arregloActualizado = state.order.map((element) => {
          if (element.id === action.payload.item.id) {
            return {
              ...element,
              quantity: element.quantity + 1,
            };
          } else {
            return element;
          }
        });
        order = arregloActualizado;
      } else {
        itemAgregado = { ...action.payload.item, quantity: 1 };
        order = [...state.order, itemAgregado];
      }
      return {
        ...state,
        order,
      };
    case "deleteItem":
      let newOrderArray = state.order.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...state,
        order: newOrderArray,
      };
    case "sendOrder":
      return {
        ...state,
        order: [],
        propina: 0,
      };
    case "setPropina":
      return {
        ...state,
        propina: action.payload.propina,
      };
    default:
      return state;
  }
};
