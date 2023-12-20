"use client";
import React from "react";
import { Divider, Image, Progress } from "@nextui-org/react";
import { AiFillStar } from "react-icons/ai";
import Text from "@/app/components/Text/Text";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import { Review } from "@/app/utils/interfaces";
import { ClientReview } from "./ClientReview";

export default function ProjectsAndReviews() {
  const clientReviews: Review[] = [
    {
      name: "John Doe",
      country: "USA",
      rating: 5,
      reviewText: "The seller is very good.",
      monthsAgo: 3,
      imageUrl:
        "https://c8.alamy.com/comp/A7D7H4/portrait-old-men-with-straw-hat-egypt-A7D7H4.jpg",
    },
    {
      name: "John Doe1",
      country: "UK",
      rating: 4,
      reviewText: "The seller is very good.I am very grateful to him",
      monthsAgo: 2,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661458105331-c3c3ff168c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2xkJTIwY293Ym95fGVufDB8fDB8fHwx&w=1000&q=80",
    },
  ];
  return (
    <div>
      <div>
        <Text title={"Projects"} size={"mid"} />
        <div className="flex-wrap lg:flex gap-3">
          <div className="relative group mt-3">
            <div className="w-[330px] cursor-pointer h-64 rounded-lg overflow-hidden transition-transform transform-gpu">
              <Image
                src="https://civi.uxper.co/wp-content/uploads/2022/10/project-01.webp"
                alt="User"
                className="object-cover w-full h-full"
                isZoomed
              />
            </div>
            <div className="absolute bottom-0  w-full  rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity text-white">
              <div className="p-4">
                <p className="font-bold">Travel website from a to z</p>
                <p className="font-bold">backend deploy</p>
              </div>
            </div>
          </div>
          <div className="relative group mt-3">
            <div className="w-[330px] cursor-pointer h-64 rounded-lg overflow-hidden transition-transform transform-gpu">
              <Image
                src="https://civi.uxper.co/wp-content/uploads/2022/12/project-02-1.webp"
                alt="User"
                className="object-cover w-full h-full"
                isZoomed
              />
            </div>
            <div className="absolute bottom-0  w-full  rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity text-white">
              <div className="p-4">
                <p className="font-bold">Travel website from a to z</p>
                <p className="font-bold">backend deploy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Text title={"Reviews"} size={"mid"} />
        <Paragraph
          text={"446 reviews for this Gig"}
          classes={"mt-3 font-bold"}
        />
        <div className="grid grid-cols-12 gap-6 mt-3">
          <div className="col-span-12 lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <Paragraph
                text={"5 Starts"}
                classes={"whitespace-nowrap font-bold"}
              />
              <Progress
                size="md"
                value={300}
                maxValue={442}
                color="default"
                className="max-w-md"
                aria-label="progress"
              />
              <Paragraph text={"(442)"} />
            </div>
            <div className="flex items-center justify-between gap-2">
              <Paragraph
                text={"4 Starts"}
                classes={"whitespace-nowrap font-bold"}
              />
              <Progress
                size="md"
                value={200}
                maxValue={300}
                color="default"
                className="max-w-md"
                aria-label="progress"
              />
              <Paragraph text={"(300)"} />
            </div>
            <div className="flex items-center justify-between gap-2">
              <Paragraph
                text={"3 Starts"}
                classes={"whitespace-nowrap font-bold opacity-25"}
              />
              <Progress
                size="md"
                value={100}
                maxValue={242}
                color="default"
                className="max-w-md"
                aria-label="progress"
              />
              <Paragraph text={"(242)"} classes={"opacity-25"} />
            </div>
            <div className="flex items-center justify-between gap-2">
              <Paragraph
                text={"2 Starts"}
                classes={"whitespace-nowrap font-bold opacity-25"}
              />
              <Progress
                size="md"
                value={0}
                maxValue={0}
                color="default"
                className="max-w-md"
                aria-label="progress"
              />
              <Paragraph text={"(0)"} classes={"opacity-25"} />
            </div>
            <div className="flex items-center justify-between gap-2">
              <Paragraph
                text={"1 Start"}
                classes={"whitespace-nowrap font-bold opacity-25"}
              />
              <Progress
                size="md"
                value={100}
                maxValue={442}
                color="default"
                className="max-w-md"
                aria-label="progress"
              />
              <Paragraph text={"(142)"} classes={"opacity-25"} />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-2">
            <Paragraph text={"Rating breakdown"} classes={"font-bold"} />
            <div className="flex items-center justify-between">
              <Paragraph
                text={"Seller communication level"}
                classes={"whitespace-nowrap font-bold"}
              />
              <div className="flex items-center">
                <AiFillStar />
                <Paragraph text={"5"} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Paragraph
                text={"Recommended to a friend"}
                classes={"whitespace-nowrap font-bold opacity-25"}
              />
              <div className="flex items-center">
                <AiFillStar />
                <Paragraph text={"5"} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Paragraph
                text={"Service as Describe"}
                classes={"whitespace-nowrap font-bold opacity-25"}
              />
              <div className="flex items-center">
                <AiFillStar />
                <Paragraph text={"5"} />
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-8" />
        <div className="mt-3">
          {clientReviews.map((review, index) => (
            <ClientReview key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
