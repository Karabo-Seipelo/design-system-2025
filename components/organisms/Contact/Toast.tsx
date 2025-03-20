import React from "react";

export type ToastProps = {
  status: string;
  message: string;
  badge: string;
};

const Toast = ({ status, message, badge }: ToastProps) => {
  const isSuccess = status === "SUCCESS";
  const containerClass = `absolute flex w-full md:w-max items-center gap-3 pl-1 pr-2.5 pt-1 pb-1 rounded-[2000px] top-5 left-1/2 -translate-x-1/2 ${isSuccess ? "bg-green-50" : "bg-red-50"}`;
  const badgeClass = `bg-white px-2.5 py-0.5 rounded-full font-medium text-sm text-center ${isSuccess ? "text-green-700" : "text-red-800"}`;
  const messageClass = `font-medium text-sm gap-1 ${isSuccess ? "text-green-700" : "text-red-600"}`;

  return (
    <div data-testid="toast" className={containerClass}>
      <div className={badgeClass}>{badge}</div>
      <div className={messageClass}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Toast;
