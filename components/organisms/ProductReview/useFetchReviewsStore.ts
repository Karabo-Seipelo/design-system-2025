import { create } from "zustand";
import fetchReviewsFromAPI, { Review } from "./fetchReviewFromAPI";
import axios from "axios";

export interface Count {
  count: number;
  rating: number;
}

interface FetchReviewsStore {
  reviews: Review;
  loading: boolean;
  error: Error | null;
  fetchReviews: (
    productId: string,
    page?: number,
    perPage?: number,
    filter?: number | null,
  ) => Promise<void>;
  currentFilter: number | null;
}

const useFetchReviewsStore = create<FetchReviewsStore>((set, get) => ({
  reviews: {
    aggregate: {
      counts: [],
      rating: 0,
      total: 0,
    },
    data: [],
    pagination: {
      has_more: false,
      page: 1,
      per_page: 12,
      total: 0,
    },
  },
  loading: true,
  error: null,
  currentFilter: null,
  fetchReviews: async (
    productId: string,
    page: number = 1,
    perPage: number = 12,
    filter: number | null = null,
  ) => {
    try {
      set({ loading: true });
      const { currentFilter } = get();
      const resetData =
        (currentFilter === null && typeof filter === "number") ||
        (currentFilter !== filter &&
          typeof filter === "number" &&
          typeof currentFilter === "number");

      if (resetData) {
        set((state) => ({
          reviews: {
            ...state.reviews,
            data: [],
            pagination: {
              has_more: false,
              page: 1,
              per_page: perPage,
              total: 0,
            },
          },
          currentFilter: filter,
        }));
      }

      const data = await fetchReviewsFromAPI(productId, page, perPage, filter);

      set((state) => ({
        reviews: {
          ...state.reviews,
          data: [...state.reviews.data, ...data.data],
          pagination: data.pagination,
          aggregate: data.aggregate,
        },
      }));
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

export default useFetchReviewsStore;
