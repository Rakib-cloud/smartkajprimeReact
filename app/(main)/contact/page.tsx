"use client";
import PageHeading from "@/app/components/PageHeading/PageHeading";
import React from "react";
import Text from "@/app/components/Text/Text";
import SmallText from "@/app/components/SmallText/SmallText";
import Subscription from "@/app/components/Subscription/Subscription";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import ContactForm from "@/app/(main)/contact/components/ContactForm";
import Loader from "@/app/(main)/contact/loader";


export default function Contact() {
  const data = {
    pageName: "Contact Us",
    nav: [
      { name: "Home", link: "/" },
      { name: "Contact", link: "/contact" },
    ],
  };

  //loader testing
  // const [loader, setLoader] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 2000);
  // }, []);
  // if (loader) {
  //   return <Loader />;
  // }
  return (
    <main>
      <PageHeading data={data} />
      <SectionWrapper>
        <div className=" grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <div>
              <Text title={"Phone number"} />
              <SmallText text={"(00) 723 445 793"} classes={"mt-3"} />
            </div>
            <div className="mt-5">
              <Text title={"Email Address"} />
              <SmallText text={"hello@smart.co"} classes={"mt-3"} />
            </div>
            <div className="mt-5">
              <Text title={"Address"} />
              <SmallText
                text={"2866 Oak-way Lane, New York, USA"}
                classes={"mt-3"}
              />
            </div>
            <div className="mt-5">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4504.486613251304!2d90.39125287257274!3d23.747111275403924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b964654510a3%3A0xa11f7998025671f8!2sSelopia!5e0!3m2!1sen!2sbd!4v1699339546704!5m2!1sen!2sbd"
                width="400"
                height="300"
                loading="lazy"
                className="border-1 lg:w-3/4 w-full"
              ></iframe>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-5 lg:mt-0 ">
            <div className="mt-3 p-4 rounded-md border">
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
      <br />
      <Subscription />
    </main>
  );
}
