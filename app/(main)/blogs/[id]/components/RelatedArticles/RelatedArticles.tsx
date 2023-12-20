"use client";
import React from "react";
import Text from "@/app/components/Text/Text";
import BlogContent from "@/app/(main)/components/Blogs/BlogContent";

export default function RelatedArticles() {
  return (
    <section className="pt-10">
      <div className="container">
        <Text title={"Related Articles"} size={"big"} />

        <BlogContent />
      </div>
    </section>
  );
}
