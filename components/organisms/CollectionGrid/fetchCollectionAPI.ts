import { Collection } from "$/molecules/card/product/interfaces";
import { ResponseCollection } from "./interfaces";
import axios from "axios";

const API_ENDPOINT =
  "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections";

const fetchCollectionAPI = async (): Promise<Collection[]> => {
  const { data } = await axios.get<ResponseCollection>(API_ENDPOINT);
  return Array.isArray(data) ? data : data.data;
};

export default fetchCollectionAPI;
