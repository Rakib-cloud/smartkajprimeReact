"use client";
import React from "react";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import BlogContent from "@/app/(main)/components/Blogs/BlogContent";
export default function Blogs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Latest from our blog"
          subTitle="Get interesting insights, articles, and news"
          link="/blogs"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <BlogContent />
        </div>
      </div>
    </section>
  );
}
