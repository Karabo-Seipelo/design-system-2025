import axios from "axios";

interface Category {
  category_id: string;
  name: string;
  created_at: string;
}

interface Collection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface Images {
  color: string;
  image_url: string;
}

export interface Info {
  title: string;
  description: string[];
}

interface Inventory {
  sku: string;
  color: string;
  size: string;
  list_price: number;
  discount: number | null;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
}

interface PriceRange {
  highest: number;
  lowest: number;
}

export interface ProductDetails {
  product_id: string;
  name: string;
  description: string;
  category: Category;
  collection: Collection;
  created_at: string;
  colors: string[];
  images: Images[];
  info: Info[];
  inventory: Inventory[];
  priceRange: PriceRange;
  rating: number;
  reviews: number;
  sizes: string[];
  sold: number;
}

const fetchProductDetailsAPI = async (
  productId: string,
): Promise<ProductDetails> => {
  const url = `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${productId}`;
  const { data } = await axios.get<ProductDetails>(url);
  return data;
};

export default fetchProductDetailsAPI;
