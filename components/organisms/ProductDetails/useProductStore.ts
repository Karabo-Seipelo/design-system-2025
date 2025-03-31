import { create } from "zustand";
import fetchProductDetailsFromAPI, {
  ProductDetails,
  Inventory,
} from "./fetchProductDetailsAPI";
import axios from "axios";

export interface ProductDetailsStore {
  product: ProductDetails | null;
  loading: boolean;
  error: Error | null;
  selectedColor: string | null;
  selectedSize: number | string | null;
  selectedQuantity: number;
  inventory: Inventory[] | null;
  selectedInventory: Inventory | null;
  setColor: (color: string) => void;
  setSize: (size: number | string) => void;
  setQuantity: (quantity: number) => void;
  fetchProductDetails: (productId: string) => Promise<void>;
  getStock: (color: string | null, size: number | null) => Inventory | null;
  updateState: (state: Partial<ProductDetailsStore>) => void;
}

const useProductStore = create<ProductDetailsStore>((set, get) => ({
  product: null,
  error: null,
  loading: true,
  selectedColor: null,
  selectedSize: null,
  selectedQuantity: 1,
  inventory: null,
  selectedInventory: null,
  setColor: (color: string) => {
    set({ selectedColor: color });
  },
  setSize: (size: number | string) => {
    set({ selectedSize: size });
  },
  setQuantity: (quantity: number) => set({ selectedQuantity: quantity }),
  fetchProductDetails: async (productId: string) => {
    try {
      set({ loading: true });
      const data = await fetchProductDetailsFromAPI(productId);
      set({ product: data, loading: false });
      set({ inventory: data.inventory });
      // TODO: set the default selected color and size from the first inventory item
      if (data.inventory.length > 0) {
        set({
          selectedColor: data.inventory[0].color,
          selectedSize: data.inventory[0].size,
          selectedInventory: data.inventory[0],
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
  getStock: (color, size) => {
    const { inventory } = get();
    return (
      inventory?.find(
        (item) =>
          item.color === color && (item.size === size || item.size === null),
      ) || null
    );
  },
  updateState: (state) => {
    set((prevState) => ({
      ...prevState,
      ...state,
    }));
  },
}));

useProductStore.subscribe((state) => {
  const { selectedColor, selectedSize } = state;
  const { getStock, selectedInventory } = useProductStore.getState();

  const inventory = getStock(selectedColor, selectedSize);
  console.log("Selected Color:", selectedColor);
  console.log("Selected Size:", selectedSize);
  console.log("Selected Quantity:", state.selectedQuantity);

  if (inventory && selectedInventory !== inventory) {
    useProductStore.setState({
      selectedInventory: inventory,
    });
  }
});

export default useProductStore;
