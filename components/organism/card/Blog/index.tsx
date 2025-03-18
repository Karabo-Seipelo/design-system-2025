import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export interface BlogCardProps {
  imageUrl: string;
  title: string;
  categories: string[];
  post: string;
  link: {
    href: string;
    label: string;
  };
  classes?: string;
}

const BlogCard = ({
  title,
  imageUrl,
  post,
  link,
  categories,
  classes = "",
}: BlogCardProps) => {
  return (
    <div className={`w-[340px] flex flex-col bg-white rounded-lg ${classes}`}>
      {imageUrl && (
        <Image
          src={imageUrl}
          className="rounded-t-lg w-full h-[288px] object-cover"
          alt="Blog card"
          width={0}
          height={0}
        />
      )}
      <div className="flex flex-col gap-3 self-stretch px-4 py-6">
        <header className="flex flex-col gap-2">
          <ul>
            {categories.map((category, index) => (
              <li
                key={`${category}-${index}`}
                className="inline-flex bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 font-normal text-sm text-center text-green-70 mr-1"
              >
                <span className="font-normal text-sm text-center text-green-700">
                  {category}
                </span>
              </li>
            ))}
          </ul>
          {title && (
            <h5 className="font-semibold text-lg text-neutral-900">{title}</h5>
          )}
        </header>
        {post && (
          <article className="flex flex-col gap-6 self-stretch font-medium text-base text-neutral-600">
            {post}
          </article>
        )}

        {link && (
          <button className="flex justify-left items-center gap-1.5 rounded font-medium text-base text-indigo-700">
            {link.label}
            <ArrowRightIcon className="size-4 text-indigo-500" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
