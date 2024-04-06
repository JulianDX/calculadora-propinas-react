export type item = {
  id: number;
  name: string;
  price: number;
};

export type itemOrder = item & {
  quantity: number;
};

export type orderStateType = {
  order: itemOrder[];
  propina: number;
};
