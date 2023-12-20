import React from 'react';
import Link from "next/link";
import {color} from "../../utils/info";
import { Image} from 'primereact/image';
import Text from "../Text/Text";
import SmallText from "../SmallText/SmallText";
import {baseUrl} from "@/app/utils/webInfo";

export default function CategoryCard({ data }:any) {
  return (
      <div className='rounded-xl'>
          <Link
              href={`/category-all/${data?.category_name}`}
              style={{ background: color.background.accent }}
              className=" block min-h-full"
          >
              <div className=" cursor-pointer h-full w-full">
                  {
                      data?.category_image ?  <Image
                          src={`${baseUrl.img}${data.category_image}`}
                          alt="Category"
                          className=""
                      /> :  <Image
                          src="https://placehold.co/600x400"
                          alt="Category"
                          className=""
                      />
                  }

              </div>
              <div className="p-4">
                  <Text title={data.category_name} classes={"pb-2"} />
                  <SmallText text={data.description} />
              </div>
          </Link>
      </div>

  );
}
