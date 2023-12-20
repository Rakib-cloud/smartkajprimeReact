"use client";
import React from "react";
import SmallText from "../SmallText/SmallText";

export default function HoverItem() {
  return (
    <div className="hidden absolute top-[50px] left-0 group-hover:block bg-white py-2  rounded-xl shadow w-[350px]">
      <div className="flex flex-col gap-y-2">
        <div className="cursor-pointer hover:bg-gray-100 duration-200 px-4 py-2">
          <h5 className="text-base font-medium">Financial Services</h5>
          <SmallText
            text="Grammar is essential for communication. It makes
                            texts easier"
          />
        </div>

        <div className="cursor-pointer hover:bg-gray-100 duration-200  px-4 py-2">
          <h5 className="text-base font-medium">Marketing and Sales</h5>
          <SmallText
            text="Grammar is the study of words, their structure, and
                            function. It is essential to learn grammar because"
          />
        </div>

        <div className="cursor-pointer hover:bg-gray-100 duration-200  px-4 py-2">
          <h5 className="text-base font-medium">Technology Solutions</h5>
          <SmallText
            text="Grammar is the study of words, their structure, and
                            function. It is essential to learn grammar because"
          />
        </div>
      </div>
    </div>
  );
}
