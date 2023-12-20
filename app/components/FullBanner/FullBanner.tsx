"use client";
import { Image} from 'primereact/image';
import Text from "@/app/components/Text/Text";
import Paragraph from "@/app/components/Paragraph/Paragraph";

export default function FullBanner() {
  return (
      <section
          className=" py-16 "
          style={{
            backgroundImage: `url('https://www.shutterstock.com/image-photo/businessman-draw-growth-graph-analysing-260nw-2139780347.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
      >
        <div className="container">
          <div className="">
            <Text
                title={"Achievement"}
                size={"big"}
                classes={"font-bold text-white flex items-center justify-center"}
            />
            <Paragraph
                text={"The numbers speak fo our success"}
                classes={" text-white flex items-center justify-center"}
            />
          </div>

          <div>
            <div className="grid lg:grid-cols-4 grid-cols-2  gap-2 my-4">
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <div className="bg-white w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center">
                    <Image src="/assets/banner/freelancing.png" />
                  </div>
                </div>
                <div className="">
                  <Text
                      title={"50K"}
                      classes={
                        " lg:text-2xl  text-white flex items-center justify-center"
                      }
                  />
                  <Paragraph
                      text={"Expert Freelancers"}
                      classes={
                        " text-white flex items-center justify-center lg:font-bold"
                      }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <div className="bg-white w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center">
                    <Image src="/assets/banner/task.png" />
                  </div>
                </div>
                <div className="">
                  <Text
                      title={"2M"}
                      classes={
                        "lg:text-2xl  text-white flex items-center justify-center"
                      }
                  />
                  <Paragraph
                      text={"Projects Completed"}
                      classes={
                        " text-white flex items-center justify-center lg:font-bold"
                      }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <div className="bg-white w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center">
                    <Image src="/assets/banner/pay.png" />
                  </div>
                </div>
                <div className="">
                  <Text
                      title={"$250M"}
                      classes={
                        "lg:text-2xl text-white flex items-center justify-center"
                      }
                  />
                  <Paragraph
                      text={"Paid to Freelancers"}
                      classes={
                        " text-white flex items-center justify-center lg:font-bold"
                      }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <div className="bg-white w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center">
                    <Image src="/assets/banner/positive.png" />
                  </div>
                </div>
                <div className="">
                  <Text
                      title={"5M"}
                      classes={
                        "lg:text-2xl  text-white flex items-center justify-center"
                      }
                  />
                  <Paragraph
                      text={"Positive Reviews"}
                      classes={
                        " text-white flex items-center justify-center lg:font-bold"
                      }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
