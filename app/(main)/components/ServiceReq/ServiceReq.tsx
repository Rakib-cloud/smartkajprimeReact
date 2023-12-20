"use client";
import { color } from "@/app/utils/info";
import { Image} from 'primereact/image';
import { Button } from 'primereact/button';
import Text from "@/app/components/Text/Text";
import SmallText from "@/app/components/SmallText/SmallText";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {useState} from "react";

import { InputText } from 'primereact/inputtext';
import {baseUrl} from "@/app/utils/webInfo";


export default function ServiceReq() {
  const[serviceName,setServiceName]=useState<string>('')
  // const handleSubmitCategory = async () => {
  //   if (serviceName) {
  //     try {
  //       const postData = {
  //         name: serviceName,
  //       };
  //       const response: Response = await fetch(
  //           `${baseUrl.url}/faq/`,
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-type": "Application/json",
  //               Authorization: `Bearer ${baseUrl.token}`,
  //             },
  //             body: JSON.stringify(postData),
  //           }
  //       );
  //
  //       const responseData = await response.json();
  //       if (response.status === 200) {
  //
  //       } else {
  //         console.log('error')
  //       }
  //     } catch (error) {
  //       console.error("Error submitting data:", error);
  //     }
  //   }
  // };
  return (
    <section className={"py-16"}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 p-8 lg:p-2 bg-primary rounded-xl">
          <div className=" hidden lg:block h-full">
            <Image
              alt=""
              src="https://i.ibb.co/sPZZtHr/service-request.png"
              width="500"
              className="w-full hidden lg:block"
            />
          </div>
          <div className="">
            <div className="w-20 h-20  mb-2 block lg:hidden">
              {/*<Image*/}
              {/*  src="https://cdn-icons-png.flaticon.com/512/5969/5969711.png"*/}
              {/*  width={500}*/}
              {/*  alt=""*/}
              {/*/>*/}
              <AiOutlineQuestionCircle className={"w-full h-full text-white"} />
            </div>
            <div>
              <Text
                title={"Can not find what you are looking for?"}
                size={"big"}
                classes={"mb-1 text-white"}
              />
              <SmallText
                classes={"py-3 text-zinc-100 lg:w-2/3 w-full"}
                text={
                  "Need something specific? No problem. Make a service request, and our team will assist you promptly."
                }
              />
            </div>
            <div className={" flex gap-2"}>
              <InputText
                placeholder="Service Name"
                className="sm:w-8/12 md:w-7/12"
                value={serviceName}
                onChange={(e)=>setServiceName(e.target.value)}
              />

              <Button
                style={{ background: color.background.secondary }}
                className="text-white"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
