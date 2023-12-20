"use client";
import Text from "@/app/components/Text/Text";
import Link from "next/link";
import React from "react";
import {baseUrl} from "@/app/utils/webInfo";
import { Image } from 'primereact/image';
export default function BlogCard({ data }: any) {
    const dateformat=(dateString:any)=>{

        const dateObject = new Date(dateString);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Months are zero-indexed, so add 1
        const day = dateObject.getDate();
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const seconds = dateObject.getSeconds();

        const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
        const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        const formattedDateTime = `${formattedDate} ${formattedTime}`;
        return formattedDateTime;
    }
  return (
    <Link href={`/blogs/${data?.id}`} className="space-y-4">
        {
            data?.blog?.thumbnail ?
                <Image  src={`${baseUrl.img}${data.blog.thumbnail}`} width="1000" className="w-full" alt="" />
                :       <Image  src="https://placehold.co/600x400" width="1000" className="w-full" alt="" />
        }

      <p className="text-gray-600">{dateformat(data?.published_at)}</p>
      <Text
        title={data?.blog?.title}
        classes={"hover:text-secondary duration-400 transition-all"}
        className=""
      />
    </Link>
  );
}
