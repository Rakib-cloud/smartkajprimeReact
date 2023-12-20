"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import Text from "@/app/components/Text/Text";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import SmallText from "@/app/components/SmallText/SmallText";
import HorizontalList from "@/app/components/HorizontalList/HorizontalList";

export default function Information() {
  return (
    <div className="space-y-5">
      <div className="gird grid-cols-12">
        <div className="col-span-6">
          <div className="w-20 h-20 rounded-full overflow-hidden ">
            <Image
              src="https://civi.uxper.co/wp-content/uploads/2022/10/peter-parker-1.webp"
              alt="Profile Image"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="flex items-center">
            <Text size="mid" title="Peter Packer" />
            <SmallText classes="ml-2" text="Fullstack Developer" />
          </div>
          <div className="flex items-center">
            <span className="flex items-center gap-1 mr-2">
              <CiLocationOn size={19} />
              chicago
            </span>
            <span className="flex items-center gap-1 mr-2">
              <BsCurrencyDollar size={19} />
              1200/month
            </span>
            <span className="flex items-center gap-1 mr-2">
              <AiOutlineStar size={19} className="text-teal-400 " />
              4.5(2 Reviews)
            </span>
          </div>
        </div>
      </div>
      <div>
        <Paragraph
          text="I am an experienced Filemaker Pro Developer based in the Los Angeles
          metropolitan area. I have worked with Filemaker since version 3.5.
          Through out the years, I have created many solutions using the
          Filemaker Pro platform for my employers. I can create your Filemaker
          Pro solution from scratch or by modifying an existing template. I can
          create the front-end UI, as well as the tables, table relationships,
          and scripts in the back-end. If you need your solution to be hosted on
          a Filemaker Server or accessed via Filemaker Go, I can assist you with
          that as well. I have many satisfied customers here that I have helped
          in creating their unique Filemaker Pro solutions. Please take a look
          at my feedback. I am confident I will be able to assist you with your
          Filemaker Pro needs. I am flexible to work with and I will work within
          your budget. Thank you in advance for your consideration."
        />
      </div>
      <div>
        <div>
          <Text title={"Skills"} size={"mid"} />
          <HorizontalList data={["React Js", "Typescript", "Node Js"]} />
        </div>
      </div>
    </div>
  );
}
