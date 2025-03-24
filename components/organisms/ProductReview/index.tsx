import "remixicon/fonts/remixicon.css";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import OverallRating from "./OverallRating";
import useFetchReviews from "./useFetchReviews";

export interface ProductReviewProps {
  isOpen: boolean;
  close: () => void;
  productId: string;
}

const ProductReview: React.FC<ProductReviewProps> = ({
  isOpen,
  close,
  productId,
}) => {
  const { reviews, loading, error } = useFetchReviews(productId);
  const { aggregate } = reviews;

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
            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <header className="flex justify-end">
              <Button className="" onClick={close}>
                <i className="ri-close-large-line"></i>
              </Button>
            </header>

            <div className="flex flex-col">
              <h4 className="font-semibold text-xl text-neutral-900">
                Overall Rating
              </h4>
              <OverallRating score={aggregate.rating} total={aggregate.total} />
              <div className="flex flex-col items-center p-6 gap-6">
                <div className="flex w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center">
                  <i className="ri-chat-smile-3-line text-indigo-700 text-2xl"></i>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h6 className="font-medium text-xl text-center text-neutral-900">
                    No reviews yet!
                  </h6>
                  <p className="font-normal text-base text-center text-neutral-900">
                    Be the first to review this product
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductReview;
