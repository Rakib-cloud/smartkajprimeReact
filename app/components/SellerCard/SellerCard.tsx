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
import {Avatar} from "primereact/avatar";

export default function SellerCard({ data }: any) {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <div className="flex items-center justify-between mb-4">
        <Avatar
          image={data.profile}
          size="large" shape="circle"
        />
          {/*href={`/seller/${data.name}`}*/}
        <Button
            label={"View Profile"}
            size={"small"}
            outlined
            rounded
          />

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
