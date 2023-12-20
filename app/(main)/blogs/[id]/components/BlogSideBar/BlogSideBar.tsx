"use client";
import React from "react";
import Text from "@/app/components/Text/Text";
import HorizontalList from "@/app/components/HorizontalList/HorizontalList";

export default function BlogSideBar() {
  return (
    <div className="p-8 rounded-xl sticky top-24 border-1">
      <Text title={"Category"} />
      <ul className="pt-5 text-gray-500">
        <li className="pb-2 underline">Education</li>
        <li className="pb-2 underline">Education</li>
        <li className="pb-2 underline">Education</li>
        <li className="pb-2 underline">Education</li>
        <li className="pb-2 underline">Education</li>
        <li className="pb-2 underline">Education</li>
      </ul>

      <div className="pt-5">
        <Text title={"Tags"} />
        <div className="">
          <HorizontalList data={["React Js", "Typescript", "Node Js"]} />
        </div>
      </div>
    </div>
  );
}
