"use client";
import React from "react";
import { guide } from "@/app/utils/staticData";
import { Guide } from "@/app/utils/interfaces";
import { Image } from "@nextui-org/react";
import Text from "@/app/components/Text/Text";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import Link from "next/link";

export default function AllUserGuide() {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {guide.map((data: Guide, i: number) => (
          <Link
            href={`/user-guide/${i + 1}`}
            className="block space-y-8"
            key={i}
          >
            <Image alt="" src={data.image} width={70} />
            <Text title={data.title} />
            <Paragraph text={data.text} />
          </Link>
        ))}
      </div>
    </section>
  );
}
