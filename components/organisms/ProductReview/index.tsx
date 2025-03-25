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
  const { reviews, loading, error } = useFetchReviews(productId);

  if (error) {
    // TODO: how will the error be displayed?
    return <p>{error.message}</p>;
  }

  const { aggregate, data } = reviews;

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
                  <Reviews data={data} />
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
