import { create } from "zustand";
import axios from "axios";

interface Counts {
  count: number;
  rating: number;
}

interface Aggregate {
  counts: Counts[];
  rating: number;
  total: number;
}

interface User {
  name: string;
  user_id: string;
  avatar_url: string;
}

interface Rating {
  rating: number;
  content: string;
  created_at: string;
  user: User;
}

interface Pagination {
  has_more: boolean;
  page: number;
  per_page: number;
  total: number;
}

interface Review {
  aggregate: Aggregate;
  data: Rating[];
  pagination: Pagination;
}

interface FetchReviewsStore {
  reviews: Review[];
  loading: boolean;
  error: Error | null;
  fetchReviews: (
    productId: string,
    page?: number,
    perPage?: number,
  ) => Promise<void>;
}

const useFetchReviewsStore = create<FetchReviewsStore>((set) => ({
  reviews: [],
  loading: true,
  error: null,
  fetchReviews: async (
    productId: string,
    page: number = 1,
    perPage: number = 12,
  ) => {
    try {
      const { data } = await axios.get(
        `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${productId}/reviews?page=${page}&per_page=${perPage}`,
      );

      set({ reviews: data });
    } catch (error) {
      set({ error: error as Error });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useFetchReviewsStore;
