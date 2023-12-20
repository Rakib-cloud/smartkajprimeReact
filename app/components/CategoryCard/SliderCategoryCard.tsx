"use client";
import CategoryCard from "@/app/components/CategoryCard/CategoryCard";
export default function SliderCategoryCard({ data }: any) {
  return (
    <div className="keen-slider__slide number-slide1y w-full min-h-full rounded-xl">
        <CategoryCard data={data}/>
    </div>

    // <Link
    //     href={`/category-all/${data?.categoryName}`}
    //     style={{ background: color.background.accent }}
    //     className=" block min-h-full"
    // >
    //     <div className=" cursor-pointer h-full w-full">
    //         <Image
    //             src={data.image}
    //             alt="User"
    //             className=""
    //             radius="none"
    //             // isZoomed
    //         />
    //     </div>
    //     <div className="p-4">
    //         <Text title={data.title} classes={"pb-2"} />
    //         <SmallText text={data.text} />
    //     </div>
    // </Link>
  );
}
//TODO card height not responsive
