"use client";
import { Image} from 'primereact/image';
import { Button } from 'primereact/button';
import React from "react";
import Text from "../Text/Text";
import { AiFillStar, AiOutlineFolderOpen, AiOutlinePlus } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import Paragraph from "../Paragraph/Paragraph";
import { color } from "@/app/utils/info";
import Link from "next/link";
import HorizontalList from "../HorizontalList/HorizontalList";

export default function SellerCard({ data }: any) {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <div className="flex items-center justify-between mb-4">
        <Image
          alt=""
          src={data.profile}
          width="1000"
          className="w-10 h-10 object-cover"
        />
          {/*href={`/seller/${data.name}`}*/}
        <Button
            style={{ color: color.background.primary }}
          >
            <AiOutlinePlus className="mr-1"/>
            View Profile
          </Button>
      </div>
      <Text title={data.name} />
      <ul className="flex items-center space-x-4 mb-4">
        <li className="flex items-center text-sm text-gray-500">
          <MdCategory size={19} />
          {data.category}
        </li>
        <li className="flex items-center text-sm text-gray-500">
          <AiOutlineFolderOpen size={19} />
          {data.projects}
        </li>
        <li className="flex items-center text-sm text-gray-500">
          <AiFillStar size={19} />
          {data.rating}
        </li>
      </ul>
      <Paragraph text={data.text} />
      <HorizontalList data={data?.skills} />
    </div>
  );
}
