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
  const [shownReviewsCount, setShownReviewsCount] = useState<number>(1);
  const [filter, setFilter] = useState<number | null>(null);
  const applyFilter = async (rating: number) => {
    const filter = rating;
    setFilter(rating);
    setShownReviewsCount(1);
    await fetchReviews(productId, 1, reviewCountPerPage, filter);
  };
  const clearFilter = async () => {
    setFilter(null);
    setShownReviewsCount(1);
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
    setShownReviewsCount(newCount);
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
            className="w-full max-w-[343px] md:max-w-[522px] lg:max-w-[1008px] rounded-lg bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <header className="flex justify-end lg:pb-6">
              <Button className="" onClick={close}>
                <i className="ri-close-large-line"></i>
              </Button>
            </header>
            <div className="max-h-[calc(100vh-160px)] overflow-y-auto">
              <div className="h-[calc(100vh_-_232px)] flex flex-col gap-10 lg:flex-row lg:gap-8">
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
                  classes="w-full flex-1 px-4 md:px-8 lg:pl-0 lg:pr-8 lg:overflow-y-auto"
                  loading={loading}
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductReview;
