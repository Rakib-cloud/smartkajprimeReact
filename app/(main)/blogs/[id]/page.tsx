"use client";
import PageHeading from "@/app/components/PageHeading/PageHeading";
import React, {useEffect, useState} from "react";
import BlogContent from "@/app/(main)/components/Blogs/BlogContent";
import Text from "@/app/components/Text/Text";
import BlogSideBar from "@/app/(main)/blogs/[id]/components/BlogSideBar/BlogSideBar";
import BlogDetailsLeft from "./components/BlogDetailsLeft";
import {baseUrl} from "@/app/utils/webInfo";

export default function Home({ params }: { params: { id: number } }) {
  const { id } = params;
  const data = {
    pageName: "Blog Details",
    nav: [
      { name: "Home", link: "/" },
      { name: "Blog-Details", link: "/blog-details" },
    ],
  };
  const [blogData, setBlogData] = useState<any | null>(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    const getOne = async () => {
      try {
        const res = await fetch(`${baseUrl.url}/blogs/getOneBlog/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${baseUrl.token}`,
          },
        });
        const resData = await res.json();
        if (res.status === 204) {
          setBlogData(null);
          return;
        }
        if (res.ok) {
          setBlogData(resData?.data);
        } else {
          console.log('error')
        }
      } catch (error: any) {
        console.log('super error')
      }
    };
    getOne().then();
  }, [id]);
  console.log('single blog data is',blogData)
  return (
    <div>
      <PageHeading data={data} />
      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          <div className="lg:col-span-8 col-span-12">
            <BlogDetailsLeft blogData={blogData}/>
          </div>
          <div className="lg:col-span-4 col-span-6">
            <BlogSideBar />
          </div>
        </div>
        <div className="py-16">
          <Text title="Related Articles" size={"big"} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-4">
            <BlogContent />
          </div>
        </div>
      </div>
    </div>
  );
}
