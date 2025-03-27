import React, { useState } from "react";
import { Rating as RatingType } from "./fetchReviewFromAPI";
import Rating from "$/molecules/Rating";
import ReviewDate from "./ReviewDate";
import Image from "next/image";

interface ReviewerProps {
  review: RatingType;
}

const Reviewer: React.FC<ReviewerProps> = ({ review }) => {
  const { rating, created_at, content, user } = review;
  const [imageError, setImageError] = useState<boolean>(false);
  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return initials.toUpperCase();
  };
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <header className="flex flex-row w-full gap-4 justify-between">
        <div className="w-[17%] md:w-[11%]">
          <div className="w-[48px] h-[48px] overflow-hidden rounded-full">
            {imageError ? (
              <span className="text-neutral-900 font-semibold bg-slate-100 w-full h-full flex items-center justify-center">
                {getInitials(user.name)}
              </span>
            ) : (
              <Image
                src={user.avatar_url}
                alt={user.name}
                width={48}
                height={48}
                onError={() => setImageError(true)}
                loading="lazy"
              />
            )}
          </div>
        </div>

        <div className="w-[83%] md:w-[89%] flex flex-col gap-1">
          <div className="flex flex-row justify-between">
            <div
              className="font-semibold text-base text-neutral-900"
              dangerouslySetInnerHTML={{ __html: user.name }}
            />
            <ReviewDate
              date={created_at}
              classes="font-normal text-nowrap text-xs text-neutral-600"
            />
          </div>
          <Rating score={rating} showScore={false} />
        </div>
      </header>
      <div
        className="w-full font-normal text-base text-neutral-600"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Reviewer;
