"use client";
import React from "react";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
import { Image } from "@nextui-org/react";
import Text from "@/app/components/Text/Text";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import Link from "next/link";
import { guide } from "@/app/utils/staticData";
import { Guide } from "@/app/utils/interfaces";

export default function UserGuide() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading
          title={"Don't Know what to do?"}
          subTitle="We are here to guide you."
          link="/user-guide"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {guide.slice(0, 3).map((data: Guide, i: number) => (
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
      </div>
    </section>
  );
}
