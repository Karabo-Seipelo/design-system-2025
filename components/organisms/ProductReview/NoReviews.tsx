const NoReviews: React.FC = () => {
  return (
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
  );
};

export default NoReviews;
