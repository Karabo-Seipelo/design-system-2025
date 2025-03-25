import React, { useState } from "react";
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
  const mediaQueryList = window.matchMedia("(min-width: 768px)");
  const reviewCountPerPage = mediaQueryList.matches ? 2 : 1;
  const { reviews, loading, error, fetchReviews } = useFetchReviews({
    productId,
    perPage: reviewCountPerPage,
  });
  const [shownReviewsCount, setShownReviewCount] = useState<number>(0);
  const showMoreReviews = async () => {
    const newCount = shownReviewsCount + reviewCountPerPage;
    const page = Math.ceil(newCount / reviewCountPerPage);
    const perPage = reviewCountPerPage;
    setShownReviewCount(newCount);
    await fetchReviews(productId, page, perPage);
  };

  if (error) {
    // TODO: how will the error be displayed?
    return <p>{error.message}</p>;
  }

  const { aggregate, data, pagination } = reviews;

  return (
    <>
      {!loading && (
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
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <OverallRating {...aggregate} title={title} />
                  <Reviews
                    data={data}
                    pagination={pagination}
                    handler={showMoreReviews}
                  />
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default ProductReview;
