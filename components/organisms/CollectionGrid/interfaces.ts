import {
  ProductCardProps,
  Collection,
} from "$/molecules/card/product/interfaces";

export interface ResponseCollection {
  data: Collection[];
}

export interface CollectionGridProps {
  title: string;
  collection: ProductCardProps[];
}
