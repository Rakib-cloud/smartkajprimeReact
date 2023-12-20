"use client";
import PageHeading from "@/app/components/PageHeading/PageHeading";
import ProjectsAndReviews from "./components/ProjectsAndReviews";
import SideItem from "./components/SideItem";
import Information from "@/app/(main)/seller/[name]/components/Information";
import Experience from "@/app/(main)/seller/[name]/components/Experience";
import Loading from "@/app/(main)/seller/[name]/loading";

export default function Details({ params }: { params: { slug: string } }) {
  console.log("params", params)
  const data = {
    pageName: "Seller Details",
    nav: [
      { name: "Home", link: "/" },
      { name: "Seller", link: "/" },
      { name: "Details", link: "/details" },
    ],
  };
  return (
    <main>
      <PageHeading data={data} />
      <div className="container">
        <div className="grid grid-cols-12 gap-8 py-8">
          <div className="lg:col-span-8 col-span-12 space-y-8">
            <Information/>
            <Experience/>
            <ProjectsAndReviews />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <SideItem />
          </div>
        </div>
      </div>
    </main>
  );
}
