import axios from "axios";

export type DirectionType = "asc" | "desc";
export type SortType = "created" | "rating" | "popularity" | "price";

export interface FetchProductArgs {
  page?: number;
  per_page?: number;
  collection?: string;
  sort?: SortType;
  direction?: DirectionType;
}

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

export interface Inventory {
  sku: string;
  color: string;
  size: number | string | null;
  list_price: number;
  discount: number | null;
  discount_percentage: number | null;
  sale_price: number;
  sold: number;
  stock: number;
}

interface PriceRange {
  highest: number;
  lowest: number;
}

export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: Category;
  collection: Collection;
  created_at: string;
  colors: string[];
  images: Images[];
  inventory: Inventory[];
  priceRange: PriceRange;
  rating: number;
  reviews: number;
  sizes: (number | string)[];
  sold: number;
}

export interface FetchProductResponse {
  data: Product[];
  pagination: {
    page: number;
    per_page: number;
    has_more: boolean;
  };
}

const fetchProductsAPI = async ({
  page,
  per_page,
  collection,
  sort,
  direction,
}: FetchProductArgs): Promise<FetchProductResponse> => {
  const url =
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products";
  const params = {
    page,
    per_page,
    collection,
    sort,
    direction,
  };
  const { data } = await axios.get<FetchProductResponse>(url, { params });
  return data;
};

export default fetchProductsAPI;
