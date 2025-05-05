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
    collection?: string,
    sort?: SortType,
    direction?: DirectionType,
    page?: number,
    perPage?: number,
  ) => Promise<void>;
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
  fetchProducts: async (
    collection,
    sort,
    direction,
    page = 1,
    perPage = 10,
  ) => {
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
      console.error("Error fetching products:", error);
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
