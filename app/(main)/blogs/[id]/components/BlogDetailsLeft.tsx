"use client";
import React from "react";
import Text from "@/app/components/Text/Text";
import { Image } from "@nextui-org/react";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import {baseUrl} from "@/app/utils/webInfo";
import parse from "html-react-parser";

export default function BlogDetailsLeft({ blogData }:any) {
  return (
    <div>
      <Text
        size={"big"}
        title={blogData?.title}
      />
      <div className="pt-4 flex items-center gap-x-2">
        <p className="text-gray-600">
          by <span className="font-semibold text-black">{blogData?.author}({blogData?.designation})</span>
          <span className="pl-2 font-bold">.</span>
        </p>
        <p className="text-gray-600">October 27, 2022</p>
      </div>
      <Paragraph
        classes={"py-5"}
        text={
          "Potential employers can learn a lot about you from your answer to this" +
          " question. Make sure" +
          " you highlight your relevant skills and experience, focus on the positives, and keep your answer" +
          " concise and memorable."
        }
      />

      <div>
        <Image
            src={`${baseUrl.img}${blogData?.thumbnail}`}
          alt={"Blog"}
        />
      </div>
      <Paragraph
        classes={"py-10"}
        text={
            parse(`${blogData?.content}`)
        }
      />
        {blogData?.media && (
            <div className="video-responsive ">
                <iframe
                    width="803"
                    height="480"
                    src={`https://www.youtube.com/embed/${blogData?.media}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        )}
      {/*<div className="grid md:grid-cols-3 grid-cols-1 gap-3">*/}
      {/*  <Image*/}
      {/*    src={*/}
      {/*      "https://civi.uxper.co/wp-content/uploads/2022/10/slide-03-1024x683.webp"*/}
      {/*    }*/}
      {/*    alt={"Blog"}*/}
      {/*  />*/}
      {/*  <Image*/}
      {/*    src={*/}
      {/*      "https://civi.uxper.co/wp-content/uploads/2022/10/slide-03-1024x683.webp"*/}
      {/*    }*/}
      {/*    alt={"Blog"}*/}
      {/*  />*/}
      {/*  <Image*/}
      {/*    src={*/}
      {/*      "https://civi.uxper.co/wp-content/uploads/2022/10/slide-03-1024x683.webp"*/}
      {/*    }*/}
      {/*    alt={"Blog"}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
}
