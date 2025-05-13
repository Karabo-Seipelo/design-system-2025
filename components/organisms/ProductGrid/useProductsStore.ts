import { create } from "zustand";
import fetchProductsAPI, {
  Product,
  SortType,
  DirectionType,
} from "./fetchProductsAPI";
import axios from "axios";

export interface FetchProductArgs {
  collection?: string;
  sort?: SortType;
  direction?: DirectionType;
  page?: number;
  perPage?: number;
}

export interface ProductsStore {
  products: Product[];
  loading: boolean;
  error: Error | null;
  page: number;
  perPage: number;
  hasMore: boolean;
  collection?: string;
  sort?: SortType;
  direction?: DirectionType;
  fetchProducts: (args?: FetchProductArgs) => Promise<void>;
}

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  loading: true,
  error: null,
  page: 1,
  perPage: 10,
  hasMore: false,
  collection: undefined,
  sort: undefined,
  direction: undefined,
  fetchProducts: async (args = {}) => {
    const {
      collection = "latest",
      sort,
      direction,
      page = 1,
      perPage = 10,
    } = args;

    try {
      set({ loading: true });
      const response = await fetchProductsAPI({
        page,
        per_page: perPage,
        collection,
        sort,
        direction,
      });
      set({ products: response.data });
      set({
        page: response.pagination.page,
        perPage: response.pagination.per_page,
        hasMore: response.pagination.has_more,
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
