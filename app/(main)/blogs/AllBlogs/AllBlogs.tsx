"use client";
import React, {useState} from "react";
import { IBlogCard } from "@/app/utils/interfaces";
import BlogCard from "../../components/Blogs/BlogCard";
import {useFetch} from "@/app/hooks/useFetch";
import {Pagination} from "@nextui-org/react";

export default function AllBlogs() {
    const [limitData, setLimitData] = useState<number>(4);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const url = `/blogs/getAll/${limitData}/${pageNumber}`;

    const { data: blogs, loading, totalData, setData } = useFetch(url, [
        pageNumber,
        limitData,
    ]);

    const pages = Math.ceil(totalData / limitData);

    const handlePageChange = (newPage: number) => {
        setPageNumber(newPage);
    };
    console.log('blogs are ',blogs)
  return (
      <section className="py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {blogs.map((blog: any, k: number) => {
                  return <BlogCard key={k} data={blog}/>;
              })}
          </div>
          <div className="flex w-full justify-center mt-16">
              <Pagination
                  isCompact
                  showControls
                  // showShadow
                  color="secondary"
                  page={pageNumber}
                  total={pages}
                  onChange={handlePageChange}
              />
          </div>
      </section>
  );
}
