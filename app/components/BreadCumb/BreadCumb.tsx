"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";

export default function BreadCrumb({ data }: any) {
  return (
    <Breadcrumbs>
      {data?.map((item: any, index: any) => (
        <BreadcrumbItem key={index}>
          <Link href={item.link}>{item.name}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
