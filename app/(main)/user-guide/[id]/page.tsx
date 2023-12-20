"use client";
import PageHeading from "@/app/components/PageHeading/PageHeading";
import Paragraph from "@/app/components/Paragraph/Paragraph";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import Subscription from "@/app/components/Subscription/Subscription";
import Text from "@/app/components/Text/Text";
import { Divider } from "@nextui-org/react";
import React from "react";

export default function GuideDetails() {
  const data = {
    pageName: "User Guide Details",
    nav: [
      { name: "Home", link: "/" },
      { name: "user-guide", link: "/user-guide" },
      { name: "details", link: "/user-guide/2" },
    ],
  };
  return (
    <main>
      <PageHeading data={data} />
      <SectionWrapper first={true}>
        <Text size="big" title="How to Create a new account" />
        <Paragraph text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum deserunt, fugiat temporibus error, fuga hic voluptate magni necessitatibus adipisci veniam cupiditate. Corporis autem nobis explicabo aspernatur. Modi atque excepturi, ex molestias nulla iusto inventore quis. Esse dicta pariatur voluptatem voluptas corrupti totam hic sit quos, eum explicabo harum quaerat, earum beatae ut veniam! Odit odio sapiente non! Ea, autem. Commodi ipsum consequatur tempora praesentium dolore quia expedita ullam dicta accusamus, possimus fugiat alias illo neque inventore vel enim. Quaerat incidunt quod blanditiis magnam dignissimos? Voluptate, id unde! Omnis odit possimus eligendi tenetur, unde reprehenderit dolorem maxime autem esse. Quisquam sed minus eveniet earum, placeat soluta harum neque atque. Quas rem praesentium voluptatibus aperiam ipsum hic qui a exercitationem, quod reprehenderit, necessitatibus pariatur culpa quibusdam dolores?" />
        <br />
        <Divider />
        <br />
        <Text size="big" title="How to Create a new account" />
        <Paragraph text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum deserunt, fugiat temporibus error, fuga hic voluptate magni necessitatibus adipisci veniam cupiditate. Corporis autem nobis explicabo aspernatur. Modi atque excepturi, ex molestias nulla iusto inventore quis. Esse dicta pariatur voluptatem voluptas corrupti totam hic sit quos, eum explicabo harum quaerat, earum beatae ut veniam! Odit odio sapiente non! Ea, autem. Commodi ipsum consequatur tempora praesentium dolore quia expedita ullam dicta accusamus, possimus fugiat alias illo neque inventore vel enim. Quaerat incidunt quod blanditiis magnam dignissimos? Voluptate, id unde! Omnis odit possimus eligendi tenetur, unde reprehenderit dolorem maxime autem esse. Quisquam sed minus eveniet earum, placeat soluta harum neque atque. Quas rem praesentium voluptatibus aperiam ipsum hic qui a exercitationem, quod reprehenderit, necessitatibus pariatur culpa quibusdam dolores?" />
        <br />
      </SectionWrapper>
      <Subscription />
    </main>
  );
}
