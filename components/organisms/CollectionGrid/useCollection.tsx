import { useEffect, useState } from "react";
import { Collection } from "$/molecules/card/product/interfaces";
import fetchCollectionAPI from "./fetchCollectionAPI";

const useCollection = () => {
  const [collection, setCollection] = useState<Collection[] | null>(null);

  useEffect(() => {
    let ignore = false;

    fetchCollectionAPI()
      .then((result) => {
        if (!ignore) {
          setCollection(result);
        }
      })
      .catch((error) => {
        if (!ignore) {
          console.error("Failed to fetch collection:", error);
          // Keep collection as null on error
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return {
    collection,
  };
};

export default useCollection;
