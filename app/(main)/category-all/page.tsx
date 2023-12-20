"use client";

import PageHeading from "@/app/components/PageHeading/PageHeading";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import CategoryCard from "@/app/components/CategoryCard/CategoryCard";
import {useState} from "react";
import {useFetch} from "@/app/hooks/useFetch";
import {Pagination} from "@nextui-org/react";



export default function CategoryAll() {
  const data = {
    pageName: "All Category",
    nav: [
      { name: "Home", link: "/" },
      { name: "category", link: "/category" },
    ],
  };
    const [limitData, setLimitData] = useState<number>(4);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const url = `/categories/getAll/${limitData}/${pageNumber}`;

    const { data: categories, loading, totalData, setData } = useFetch(url, [
        pageNumber,
        limitData,
    ]);

    const pages = Math.ceil(totalData / limitData);

    const handlePageChange = (newPage: number) => {
        setPageNumber(newPage);
    };
  return (
    <main>
      <PageHeading data={data} />
        <SectionWrapper first={true}>
            <div className="grid grid-cols-4 gap-4 ">
                {categories?.map((cat: any, i: number) => {
                    return <CategoryCard data={cat} key={i}/>;
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
        </SectionWrapper>
    </main>
  );
}
