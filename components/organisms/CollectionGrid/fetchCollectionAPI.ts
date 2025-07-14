import { Collection } from "$/molecules/card/product/interfaces";
import { ResponseCollection } from "./interfaces";
import axios from "axios";

const fetchCollectionAPI = async (): Promise<Collection[]> => {
  const url =
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections";
  const { data } = await axios.get<ResponseCollection>(url);
  return Array.isArray(data) ? data : data.data;
};

export default fetchCollectionAPI;
