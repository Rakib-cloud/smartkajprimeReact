"use client";

import PageHeading from "@/app/components/PageHeading/PageHeading";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import CategoryCard from "@/app/components/CategoryCard/CategoryCard";
import {useState} from "react";
import {useFetch} from "@/app/hooks/useFetch";

import {Paginator} from "primereact/paginator";



export default function CategoryAll() {
  const data = {
    pageName: "All Category",
    nav: [
      { label: "Home", url: "/" },
      { label: "category", url: "/category" },
    ],
  };
    // const [limitData, setLimitData] = useState<number>(4);
    // const [pageNumber, setPageNumber] = useState<number>(1);
    //
    // const url = `/categories/getAll/${limitData}/${pageNumber}`;
    //
    // const { data: categories, loading, totalData, setData } = useFetch(url, [
    //     pageNumber,
    //     limitData,
    // ]);
    //
    // const pages = Math.ceil(totalData / limitData);
    //
    // const handlePageChange = (newPage: number) => {
    //     setPageNumber(newPage);
    // };
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const url = `/categories/getAll/${rows}/${first / rows + 1}`;
    const { data: categories, loading, totalData, setData } = useFetch(url, [
        first,
        rows,
    ]);
    const totalPages = Math.ceil(totalData / rows);

    const onPageChange = (event:any) => {
        setFirst(event.first);
        setRows(event.rows);
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
            <div className="">
                <div className="flex w-full justify-center">
                    {/* Use PrimeReact Paginator */}
                    <Paginator
                        first={first}
                        rows={rows}
                        totalRecords={totalData}
                        // rowsPerPageOptions={[10, 20, 30]}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </SectionWrapper>
    </main>
  );
}
