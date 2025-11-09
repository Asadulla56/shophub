export type IProduct = {
  _id?: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
