"use client";
import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import {useEffect, useState} from "react";
import {baseUrl} from "@/app/utils/webInfo";

interface Question {
  id: number;
  question: string;
  answer: string;
}
interface CategoryData {
  id: number;
  name: string;
  questions: Question[];
}
export default function Faq() {
  const [faqs, setFaqs] = useState<CategoryData[]>([]);
  const [selectCategory, setSelectCategory] = useState<any>([]);
  const defaultContent =
    "Grammar is an essential part of learning English. It is the foundation for speaking and understanding English.";

  const tabs = [
    {
      id: 1,
      name: "Company",
    },
    {
      id: 2,
      name: "Candidate",
    },
    {
      id: 3,
      name: "Privacy policy",
    },
    {
      id: 4,
      name: "Security",
    },
  ];
  useEffect(() => {
    // setLoading(true);
    const getFaq = async () => {
      try {
        const res = await fetch(`${baseUrl.url}/faq/questionnair/getAll`, {
          method: "GET",
          headers: {
            // "Content-type" : "Application/json",
            Authorization: `Bearer ${baseUrl.token}`,
          },
        });
        const resData = await res.json();
        if (res.status === 204) {
          setFaqs([]);

          return;
        }
        if (res.ok) {
          setFaqs(resData.data);
       setSelectCategory(resData.data[0].questions);
          // setLoading(false);
        } else {
          console.log("error", resData?.error);
        }
      } catch (e) {
        console.log("error");
      }
    };
    getFaq().then();
  }, []);
  return (
    <section className="py-16">
      <div className="container">
        <p className="text-center text-sm font-medium">Faqs</p>
        <p className="text-2xl text-center font-semibold">
          Any questions? We’re here to help
        </p>
        {/* Tabs */}
        <div className="py-2 flex justify-center items-center">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                "lg:gap-6 gap-3 w-full relative rounded-none p-0 border-b ",
              cursor: "w-full bg-[#22d3ee]",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-[#06b6d4]",
            }}
          >
            {faqs?.map((faq, i) => (
              <Tab
                key={i}

                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-base"  onClick={() => {
                      setSelectCategory(faq.questions);
                    }}>{faq.name}</span>
                  </div>
                }
              />
            ))}
          </Tabs>
        </div>

        <div className="flex flex-col md:w-9/12 w-full mx-auto pt-10">

          <Accordion variant="splitted">
            {selectCategory?.map((item:Question) => (
                <AccordionItem
                    key={item.id.toString()}
                    aria-label={`Accordion ${item.id}`}
                    title={item.question}
                >
                  {item.answer}
                </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
