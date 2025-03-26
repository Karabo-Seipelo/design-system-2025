import { create } from "zustand";
import fetchProductDetailsFromAPI, {
  ProductDetails,
} from "./fetchProductDetailsAPI";
import axios from "axios";

interface ProductDetailsStore {
  product: ProductDetails | null;
  loading: boolean;
  error: Error | null;
  fetchProductDetails: (productId: string) => Promise<void>;
}

const useFetchProductDetailsStore = create<ProductDetailsStore>((set) => ({
  product: null,
  loading: true,
  error: null,
  fetchProductDetails: async (productId: string) => {
    try {
      set({ loading: true });
      const data = await fetchProductDetailsFromAPI(productId);
      set({ product: data, loading: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        set({
          error: new Error(error.response?.data.message || error.message),
        });
      } else {
        set({
          error: error instanceof Error ? error : new Error(String(error)),
        });
      }
    } finally {
      set({ loading: false });
    }
  },
}));

export default useFetchProductDetailsStore;
