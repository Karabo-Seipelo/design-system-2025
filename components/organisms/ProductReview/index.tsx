import "remixicon/fonts/remixicon.css";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export interface ProductReviewProps {
  isOpen: boolean;
  close: () => void;
}

const OverallRating = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="items-center">0</div>
        <div className="flex flex-row gap-2">
          <i className="ri-star-fill text-slate-300"></i>
          <i className="ri-star-fill text-slate-300"></i>
          <i className="ri-star-fill text-slate-300"></i>
          <i className="ri-star-fill text-slate-300"></i>
          <i className="ri-star-fill text-slate-300"></i>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Excellent</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Good</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200 w-[43%]"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Average</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200 w-[43%]"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Below Average</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200 w-[43%]"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="w-[38%] flex items-center gap-1.5">Poor</div>
          <div className="flex items-center gap-3 grow">
            <div className="grow h-2 rounded-lg bg-gray-200 w-[43%]"></div>
          </div>
          <div className="w-[15%] text-right">0%</div>
        </div>
      </div>

      <Button className="flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border=[0.5px] border-solid border-neutral-200 shadow-[0px_1px_2px_0_rgb(0_0_0_/_0.06),_0px_1px_3px_0_rgb(0_0_0_/_0.10)]">
        Write a review
      </Button>
    </div>
  );
};

const ProductReview: React.FC<ProductReviewProps> = ({ isOpen, close }) => {
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
              <OverallRating />
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
