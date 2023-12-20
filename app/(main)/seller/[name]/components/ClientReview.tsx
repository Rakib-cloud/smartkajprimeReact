"use client";
import React from "react";
import { Review } from "@/app/utils/interfaces";
import { Divider, Image } from "@nextui-org/react";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import SmallText from "@/app/components/SmallText/SmallText";
import Text from "@/app/components/Text/Text";

export function ClientReview({
  name,
  country,
  rating,
  reviewText,
  monthsAgo,
  imageUrl,
}: Review) {
  return (
    <div>
      <div className="flex bg-white">
        <Image
          src={imageUrl}
          alt={name}
          className="rounded-full w-12 h-12 object-cover"
        />
        <div className="ml-4">
          <Text title={`${name}`} />
          <SmallText text={`${country}`}/>
          <div className="flex items-center gap-2 ">
            <div className="flex items-center border-r-1 ">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 fill-current  ${
                    index < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 1l2.45 6.27h6.09l-4.91 4.64 1.82 6.09-5.65-3.82L3.36 17 4.82 11.36 0 7.91h6.09L10 1z"
                    fillRule="evenodd"
                  />
                </svg>
              ))}
              <p className="ml-1 mr-2">{`${rating}/5`}</p>
            </div>

            <Paragraph text={`${monthsAgo} months ago`} classes={""} />
          </div>
          <p>{reviewText}</p>
        </div>
      </div>

      <Divider className="my-8" />
    </div>
  );
}
