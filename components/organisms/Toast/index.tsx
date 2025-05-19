import useToast from "./useToast";
import classNames from "classnames";

export type ToastProps = {
  status?: string;
  badge?: string;
  message?: string;
  icon?: string;
  autoDissmiss?: number;
};

// TODO: Look into migrating to Headless Dialog UI
// TODO: Seperate the showToast and sideToast logic with adding the content and styling
const Toast: React.FC<ToastProps> = ({ autoDissmiss, ...props }) => {
  const {
    status = props.status,
    message = props.message,
    badge = props.badge,
  } = useToast(autoDissmiss);
  const toastClasses = classNames(
    "fixed z-50 flex w-full md:w-max items-center gap-3 pl-1 pr-2.5 pt-1 pb-1 rounded-[2000px] top-5 left-1/2 -translate-x-1/2",
    {
      "bg-green-50": status === "SUCCESS",
      "bg-red-50": status === "ERROR",
    }
  );
  const badgeClasses = classNames(
    "bg-white px-2.5 py-0.5 rounded-full font-medium text-sm text-center",
    {
      "text-green-700": status === "SUCCESS",
      "text-red-800": status === "ERROR",
    }
  );
  const messageClasses = classNames("font-medium text-sm gap-1", {
    "text-green-700": status === "SUCCESS",
    "text-red-600": status === "ERROR",
  });

  // TODO: don't use the state to show the toast, use a boolean store to opt into show the toast
  return (
    <>
      {status && message && badge && (
        <div data-testid="toast" role="status" className={toastClasses}>
          <div className={badgeClasses}>{badge}</div>
          <div className={messageClasses}>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
