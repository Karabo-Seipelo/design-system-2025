import axios from "axios";

export interface Count {
  count: number;
  rating: number;
}

interface Aggregate {
  counts: Count[];
  rating: number;
  total: number;
}

interface User {
  name: string;
  user_id: string;
  avatar_url: string;
}

export interface Rating {
  rating: number;
  content: string;
  created_at: string;
  user: User;
}

export interface Pagination {
  has_more: boolean;
  page: number;
  per_page: number;
  total: number;
}

export interface Review {
  aggregate: Aggregate;
  data: Rating[];
  pagination: Pagination;
}

const fetchReviewsFromAPI = async (
  productId: string,
  page: number,
  perPage: number,
  filter: number | null = null,
): Promise<Review> => {
  const url =
    filter !== null
      ? `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${productId}/reviews?page=${page}&per_page=${perPage}&rating=${filter}`
      : `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${productId}/reviews?page=${page}&per_page=${perPage}`;
  const { data } = await axios.get<Review>(url);
  return data;
};

export default fetchReviewsFromAPI;
