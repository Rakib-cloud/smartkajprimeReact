"use client";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import SmallText from "@/app/components/SmallText/SmallText";
import Text from "@/app/components/Text/Text";
import React from "react";

export default function Experience() {
  return (
    <div className="space-y-8 ">
      <div>
        <Text title={"Work Experience"} size={"mid"} />
        <div className="flex gap-3 mt-3">
          <div className="h-28 w-2 border-r border-dotted border-gray-400 my-2"></div>
          <div>
            <Text title="Web Designer" size={"sm"} />
            <div className="flex gap-4 items-center">
              <span>Palpable Corporation</span>
              <SmallText text="2020-04-01 to 2023-12-31" />
            </div>
            <Paragraph
              text="Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat,
              blandit at pretium et, accumsan ac est. Integer vehicula rhoncus
              molestie."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
