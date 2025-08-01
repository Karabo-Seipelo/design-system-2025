import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useToast from "./useToast";
import classNames from "classnames";

export interface ToastProps {
  status?: string;
  badge?: string;
  message?: string;
  icon?: string;
  autoDissmiss?: number;
}

const Toast: React.FC<ToastProps> = ({ autoDissmiss, ...props }) => {
  const { open, closeToast, status, message, badge } = useToast(autoDissmiss);
  const toastClasses = classNames(
    "fixed z-50 flex w-full md:w-max items-center gap-3 pl-1 pr-2.5 pt-1 pb-1 rounded-[2000px] top-5 left-1/2 -translate-x-1/2",
    {
      "bg-green-50": (status ?? props.status) === "SUCCESS",
      "bg-red-50": (status ?? props.status) === "ERROR",
    },
  );
  const badgeClasses = classNames(
    "bg-white px-2.5 py-0.5 rounded-full font-medium text-sm text-center",
    {
      "text-green-700": (status ?? props.status) === "SUCCESS",
      "text-red-800": (status ?? props.status) === "ERROR",
    },
  );
  const messageClasses = classNames("font-medium text-sm gap-1", {
    "text-green-700": (status ?? props.status) === "SUCCESS",
    "text-red-600": (status ?? props.status) === "ERROR",
  });

  return (
    <Dialog open={open} onClose={() => closeToast()}>
      <DialogPanel data-testid="toast" role="output" className={toastClasses}>
        <DialogTitle className={badgeClasses}>
          {badge ?? props.badge}
        </DialogTitle>
        <div className={messageClasses}>
          <p>{message ?? props.message}</p>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default Toast;
