import {
  SortType,
  DirectionType,
} from "$/organisms/ProductGrid/fetchProductsAPI";

export interface ProductGridProps {
  title: string;
  label?: string | null;
  collection?: string;
  sort?: SortType;
  direction?: DirectionType;
  page?: number;
  perPage?: number;
}
