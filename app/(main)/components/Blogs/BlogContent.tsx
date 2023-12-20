"use client";
import React from "react";

import BlogCard from "@/app/(main)/components/Blogs/BlogCard";
import {useFetch} from "@/app/hooks/useFetch";

export default function BlogContent() {
  const url = `/blogs/getAll/3/1`;

  const { data: blogs, loading, totalData, setData } = useFetch(url, [

  ]);
  return (
    <>
      {blogs?.slice(0, 3).map((blog: any, k:number) => {
        return <BlogCard key={k} data={blog} />;
      })}
    </>
  );
}
