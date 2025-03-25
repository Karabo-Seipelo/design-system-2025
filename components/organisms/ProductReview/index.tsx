import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import OverallRating from "./OverallRating";
import Reviews from "./Reviews";
import useFetchReviews from "./useFetchReviews";

export interface ProductReviewProps {
  title: string;
  isOpen: boolean;
  close: () => void;
  productId: string;
}

const ProductReview: React.FC<ProductReviewProps> = ({
  title,
  isOpen,
  close,
  productId,
}) => {
  const [reviewCountPerPage, setReviewCountPerPage] = useState<number>(10);
  const { reviews, loading, error, fetchReviews } = useFetchReviews({
    productId,
    perPage: reviewCountPerPage,
  });
  const [shownReviewsCount, setShownReviewCount] = useState<number>(1);
  const [filter, setFilter] = useState<number | null>(null);
  const applyFilter = async (rating: number) => {
    const filter = rating;
    setFilter(rating);
    setShownReviewCount(1);
    await fetchReviews(productId, 1, reviewCountPerPage, filter);
  };
  const clearFilter = async () => {
    setFilter(null);
    setShownReviewCount(1);
    await fetchReviews(productId, 1, reviewCountPerPage);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 768px)");
    const updateReviewCountPerPage = () => {
      setReviewCountPerPage(mediaQueryList.matches ? 12 : 10);
    };
    updateReviewCountPerPage();
    mediaQueryList.addEventListener("change", updateReviewCountPerPage);
    return () => {
      mediaQueryList.removeEventListener("change", updateReviewCountPerPage);
    };
  }, []);

  const showMoreReviews = async () => {
    const newCount = shownReviewsCount + reviewCountPerPage;
    const page = Math.ceil(newCount / reviewCountPerPage);
    setShownReviewCount(newCount);
    await fetchReviews(productId, page, reviewCountPerPage, filter);
  };

  if (error) {
    // TODO: how will the error be displayed?
    return <p>{error.message}</p>;
  }

  const { aggregate, data, pagination } = reviews;

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-neutral-950 bg-opacity-80">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full md:max-w-lg lg:max-w-5xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <header className="flex justify-end lg:pb-6">
              <Button className="" onClick={close}>
                <i className="ri-close-large-line"></i>
              </Button>
            </header>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-20">
              <OverallRating
                {...aggregate}
                title={title}
                applyFilter={applyFilter}
                clearFilter={clearFilter}
                filter={filter}
                classes="lg:w-[40%] pb-5"
              />
              <Reviews
                data={data}
                pagination={pagination}
                handler={showMoreReviews}
                currentCount={shownReviewsCount}
                classes="lg:w-[60%] overflow-y-auto max-h-[400px]"
                loading={loading}
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductReview;
