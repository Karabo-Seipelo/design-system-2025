import { create } from "zustand";
import fetchProductDetailsFromAPI, {
  ProductDetails,
  Inventory,
} from "./fetchProductDetailsAPI";
import axios from "axios";

interface ProductDetailsStore {
  product: ProductDetails | null;
  loading: boolean;
  error: Error | null;
  selectedInventory: Inventory | null;
  selectedColor: string | undefined;
  selectedSize: number | string | undefined;
  selectedQuantity: number;
  fetchProductDetails: (productId: string) => Promise<void>;
  selectInventory: (inventory: Inventory, color: string, size?: string) => void;
  selectOptions: (options: {
    color?: string | undefined;
    size?: number | undefined;
  }) => void;
  selectColor: (color: string) => void;
  selectSize: (size: number | string) => void;
  updateState: (state: Partial<ProductDetailsStore>) => void;
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
      // set the default selected color and size
      if (data.colors.length > 0) {
        const defaultColor = data.colors[0];
        const defaultSize = data.sizes[0];
        console.log({ defaultColor, defaultSize });
        set({
          selectedColor: defaultColor,
          selectedSize: defaultSize,
        });
      }
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
  selectedInventory: null,
  selectedColor: undefined,
  selectedSize: undefined,
  selectedQuantity: 1,
  selectColor: (color) => {
    set({ selectedColor: color });
  },
  selectSize: (size) => {
    set({ selectedSize: size });
  },
  selectOptions: (options) => {
    set((state) => ({
      selectedColor: options.color ?? state.selectedColor,
      selectedSize: options.size ?? state.selectedSize,
    }));
  },
  selectInventory: (inventory: Inventory, color, size) => {
    set({ selectedInventory: inventory });
  },
  updateState: (state) => {
    set((prevState) => ({
      ...prevState,
      ...state,
    }));
  },
}));

export default useFetchProductDetailsStore;
