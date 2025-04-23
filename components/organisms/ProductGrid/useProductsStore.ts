import { create } from "zustand";
import fetchProductsAPI, {
  Product,
  SortType,
  DirectionType,
} from "./fetchProductsAPI";
import axios from "axios";

export interface ProductsStore {
  products: Product[];
  loading: boolean;
  error: Error | null;
  page: number;
  perPage: number;
  hasMore: boolean;
  collection: string | undefined;
  sort: SortType | undefined;
  direction: DirectionType | undefined;
  fetchProducts: (
    page?: number,
    perPage?: number,
    collection?: string,
    sort?: SortType,
    direction?: DirectionType,
  ) => Promise<void>;
}

const useProductsStore = create<ProductsStore>((set, get) => ({
  products: [],
  loading: true,
  error: null,
  page: 1,
  perPage: 10,
  hasMore: false,
  collection: undefined,
  sort: undefined,
  direction: undefined,
  fetchProducts: async (
    page = 1,
    perPage = 10,
    collection,
    sort,
    direction,
  ) => {
    set({ loading: true });
    try {
      set({ loading: true });
      const { data, pagination } = await fetchProductsAPI({
        page,
        per_page: perPage,
        collection,
        sort,
        direction,
      });
      set({ products: data });
      set({
        page: pagination.page,
        perPage: pagination.per_page,
        hasMore: pagination.has_more,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        set({
          error: new Error(error.response?.data.message ?? error.message),
        });
      } else {
        set({
          error: error instanceof Error ? error : new Error(String(error)),
          loading: false,
        });
      }
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductsStore;
