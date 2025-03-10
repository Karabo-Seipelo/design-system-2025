import useToast from "./useToast";

export type ToastProps = {
  status: string;
  message: string;
  badge: string;
};

const Toast = () => {
  const { status, message, badge } = useToast();

  return (
    <>
      {status && message && badge && (
        <div
          data-testid="toast"
          className={`fixed z-50 flex w-full md:w-max items-center gap-3 pl-1 pr-2.5 pt-1 pb-1 rounded-[2000px] top-5 left-1/2 -translate-x-1/2 ${status === "SUCCESS" ? "bg-green-50" : "bg-red-50"}`}
        >
          <div
            className={`bg-white px-2.5 py-0.5 rounded-full font-medium text-sm text-center ${status === "SUCCESS" ? "text-green-700" : "text-red-800"}`}
          >
            {badge}
          </div>
          <div
            className={`font-medium text-sm gap-1 ${status === "SUCCESS" ? "text-green-700" : "text-red-600"}`}
          >
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
