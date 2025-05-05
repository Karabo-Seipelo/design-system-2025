import { create } from "zustand";
import { Product, Inventory, Images } from "./fetchProductsAPI";

export interface ProductCardStore {
  product: Partial<Product> | null;
  selectedColor: string | null;
  outOfStock: (string | number)[];
  inventory: Inventory[] | null;
  images: Images[] | null;
  selectedInventory: Inventory | null;
  selectedImage: Images | null;
  setColor: (color: string) => void;
  getStock: (color: string | null) => Inventory | undefined;
  updateSate: (state: Partial<ProductCardStore>) => void;
}

const useProductCardStore = create<ProductCardStore>((set, get) => ({
  product: null,
  selectedColor: null,
  outOfStock: [],
  inventory: null,
  selectedInventory: null,
  images: null,
  selectedImage: null,
  setColor: (color: string) => {
    set({ selectedColor: color });
  },
  getStock: (color) => {
    const { inventory } = get();
    return inventory?.find((item) => item.color === color);
  },
  updateSate: (state) => {
    set((prevState) => ({
      ...prevState,
      ...state,
    }));
  },
}));

useProductCardStore.subscribe((state) => {
  const { selectedColor } = state;
  const { getStock, selectedInventory } = useProductCardStore.getState();

  const inventory = getStock(selectedColor);

  if (inventory && selectedInventory !== inventory) {
    useProductCardStore.setState({
      selectedInventory: inventory,
    });
  }
});

export default useProductCardStore;
